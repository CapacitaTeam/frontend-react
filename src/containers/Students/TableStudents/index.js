import React, { useEffect, useState } from 'react'
import {Table, Space, Avatar, Input, Button, Spin  } from 'antd';
import { UserOutlined, SearchOutlined   } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import StatusDisabled from '../StatusDisabled';
import StatusStudent from '../StatusStudent';
import { gql, NetworkStatus } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const STUDENTS_LIST_REQUEST = gql`  
    query User {
        users{
           username
            status
            createdat
        }
    }`;

function TableStudents() {
    const { loading, error, refetch, data, networkStatus } = useQuery(STUDENTS_LIST_REQUEST, { notifyOnNetworkStatusChange: true });
    const [selectionType, setSelectionType] = useState('checkbox');
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');

    useEffect(() => {
      refetch();
    }, [])

    if (loading || networkStatus === NetworkStatus.refetch) return <div className="contains-spin"><Spin /></div>;
    if (error) return <p>Error :(</p>;
  
    const dataSource = data.users;
    console.log(dataSource);
    
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User',
          name: record.name,
        }),
      };
    
    const  state = {
        searchText: '',
        searchedColumn: '',
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
          
        const columns = [
            {
              title: 'Acción',
              key: 'action',
              dataIndex: 'action',
              render: (text, record) => (
                  <StatusDisabled />
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
            {
                title: 'Estado',
                dataIndex: 'status',
                key: 'status',               
                filters: [
                    { text: 'Activo', value: 'Activo' },
                    { text: 'Inactivo', value: 'Inactivo' },
                ],
                onFilter: (value, record) => record.status.indexOf(value) === 0,
                render: (text, record) => (                    
                    <StatusStudent status={{text}} />                       
                  ),
            },
          
        ];
    
        return       <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={dataSource}
                    />
  
  }

    
  export default TableStudents;






