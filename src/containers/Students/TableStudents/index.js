import React, { useState } from 'react'
import { Row, Col, Typography, Table, Space, Avatar, Badge     } from 'antd';
import { UserOutlined  } from '@ant-design/icons';
import StatusDisabled from '../StatusDisabled';
import StatusStudent from '../StatusStudent';

const dataSource = [
    {
        key: '1',
        name: 'Stella Johnson',
        createdat: '10/05/2020',
        course: 15,
        status: "Activo",
    },
    {
        key: '2',
        name: 'Jonathan Madano',
        createdat: '31/02/2020',
        course: 17,
        status: "Inactivo",
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };


  const TableStudents = (props) => {
    const [selectionType, setSelectionType] = useState('checkbox');

    const state = {
        searchText: '',
        searchedColumn: '',
    };    

    const columns = [
        {
            title: 'Imagen',
            dataIndex: 'image',
            key: 'image',           
            render: (text, record) => (
                <Space size="middle">
                    <Avatar icon={<UserOutlined />} />
                </Space>
              ),
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => ('' + a.name).localeCompare(b.name),
            sortDirections: ['descend', 'ascend'],           
        },
        {
            title: 'Creado',
            dataIndex: 'createdat',
            key: 'createdat'
        },
        {
            title: 'Cursos',
            dataIndex: 'course',
            key: 'course'
        },
        {
            title: 'Estado',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => (                    
                <StatusStudent status={{text}}/>                       
              ),
        },
        {
            title: 'Acción',
            key: 'action',
            dataIndex: 'action',
            render: (text, record) => (
                <StatusDisabled />
            ),
          },
    ];

    return       <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource}
                />
  };
    
  export default TableStudents;