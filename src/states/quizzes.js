import React from 'react'
import {AppstoreAddOutlined} from '@ant-design/icons';
import Quizzes from '../containers/Quizzes';
const states = [
    {
        url:'Quizzes',
        name:'App.Quizzes',
        title:'Quizzes',
        views: {
            main: Quizzes
        },
        data:{
            contentScrollable: false,
            nav: {
                type: 'menu',
                sort: 0,
                icon: <AppstoreAddOutlined />
            }
        }
    }
];
export default states;