import React from 'react'
import { Table, Button } from 'antd';

import './styles.css';
import { UISref } from '@uirouter/react';

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '20 Downing Street',
    },
];

const Quizzes = (props) => {
    const state = {
        searchText: '',
        searchedColumn: '',
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => ('' + a.name).localeCompare(b.name),// a.name.length - b.name.length,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        },
    ];

    return (
        <>
            <UISref to="App.CreateQuiz" ><Button type="primary">Agregar</Button></UISref>
            <Table dataSource={dataSource} columns={columns} />
        </>
    )
}

export default Quizzes;