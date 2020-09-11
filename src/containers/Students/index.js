import React, { useState } from 'react'
import { Row, Col, Typography, Button, Table, Space, Avatar   } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { UISref } from '@uirouter/react';

const dataSource = [
    {
        key: '1',
        name: 'Stella Johnson',
        createdat: '10/05/2020',
        course: 15,
    },
    {
        key: '2',
        name: 'Jonathan Madano',
        createdat: '31/02/2020',
        course: 17,
    },
];

const { Title } = Typography;

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

const Students = (props) => {

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
            sorter: (a, b) => ('' + a.name).localeCompare(b.name),// a.name.length - b.name.length,
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
            title: 'Acción',
            key: 'action',
            dataIndex: 'action',
            render: (text, record) => (
              <Space size="middle">
                <a><UserOutlined style={{ fontSize: '16px', color: '#616161' }}/></a>
                <a><EditOutlined style={{ fontSize: '16px', color: '#616161' }}/></a>
                <a><DeleteOutlined style={{ fontSize: '16px', color: '#e91e63' }}/></a>
              </Space>
            ),
          },
    ];

    return (
        <>
            
            <Row>
                <Col span={8}>
                    <Title level={3}>Estudiantes</Title>
                </Col>
                <Col span={8} offset={8}>
                    <UISref to="App.CreateQuiz" ><Button type="primary">Agregar</Button></UISref>
                </Col>
            </Row>
               
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource}
            />
            
        </>
    )
}

export default Students;