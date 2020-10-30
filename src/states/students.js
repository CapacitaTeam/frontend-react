import React from 'react'
import {UserOutlined} from '@ant-design/icons';
import Students from '../containers/Students';
const states = [
    {
        url:'Students',
        name:'App.Students',
        title:'Estudiantes',
        views: {
            main: Students
        },
        data:{
            contentScrollable: false,
            nav: {
                type: 'menu',
                sort: 0,
                icon: <UserOutlined />
            }
        }
    }
];
export default states;