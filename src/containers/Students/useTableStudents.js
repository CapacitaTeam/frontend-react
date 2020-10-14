import React, { useState  } from 'react';
import {Table, Space, Avatar, Input, Button,Spin } from 'antd';
import { UserOutlined, SearchOutlined   } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import ButtonActions from './ButtonActions';
import StatusStudent from './StatusStudent';


export default () => {
    const [usersDataSources, setusersDataSources] = useState(null);
    const [userDataSources, setuserDataSources] = useState(null);

    const [selectionType, setSelectionType] = useState('checkbox');
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');   
            
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
        };
        
    
    function getColumnSearchProps(dataIndex) {
        return {
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90 }}
                >
                    Search
                </Button>
                <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
                </Button>
                </Space>
            </div>
            ),
            filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
            onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: visible => {
            if (visible) {
                // setTimeout(() => this.searchInput.select());
            }
            },
            render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text.toString()}
                />
            ) : (
                text
            ),
            }
        };
    
        function handleSearch(selectedKeys, confirm, dataIndex) {
            confirm();
            setSearchText(selectedKeys[0]);
            setSearchedColumn(dataIndex);
        };
    
        function handleReset(clearFilters) {
            clearFilters();
            setSearchText('');
        }; 

        const editUser= async (id_user) => {
            const current_user = await usersDataSources.filter(userDataSources => userDataSources.id === id_user);
            console.log('state actual: ' + JSON.stringify(userDataSources));
            setusersDataSources(current_user[0]);
        }
            
        const columns = [
            {
                title: 'Acción',
                key: 'action',
                dataIndex: 'action',
                render: (value, record) => (
                    <ButtonActions status={{value}} row={{record}}/>
                ),
            },
            {
                title: 'Estado',
                dataIndex: 'status',
                key: 'status',               
                filters: [
                    { text: 'Activo', value: 'true' },
                    { text: 'Inactivo', value: 'false' },
                ],
                onFilter: (value, record) => record.status.toString().indexOf(value) === 0,
                render: (value, record) => (                    
                    <StatusStudent status={{value}} />                       
                ),
            },
            {
                title: 'Imagen',
                dataIndex: 'image',
                key: 'image',           
                render: (text, record) => (
                    <Space size="middle">
                        <Avatar icon={<UserOutlined />} />
                    </Space>
                    )
                    
            },
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
                defaultSortOrder: 'descend',
                sorter: (a, b) => ('' + a.username).localeCompare(b.username),
                sortDirections: ['descend', 'ascend'],    
                ...getColumnSearchProps('username'),
            },
            {
                title: 'Creado',
                dataIndex: 'createdat',
                key: 'createdat',
                sorter: (a, b) => ('' + a.createdat).localeCompare(b.createdat),
                ...getColumnSearchProps('createdat'),
            },
            {
                title: 'Cursos',
                dataIndex: 'course',
                key: 'course',
                sorter: (a, b) => ('' + a.course).localeCompare(b.course),
                ...getColumnSearchProps('course'),
            },
            
            
        ];
    

    return { 
        usersDataSources,
        setusersDataSources,
        editUser,
        rowSelection,
        columns
    };
};
