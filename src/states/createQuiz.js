import React from 'react'
import {AppstoreAddOutlined} from '@ant-design/icons';
import CreateQuiz from '../containers/CreateQuiz';
const states = [
    {
        url:'CreateQuiz',
        name:'App.CreateQuiz',
        title:'Crear Quiz',
        views: {
            main: CreateQuiz
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