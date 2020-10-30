import React from 'react'
import {AppstoreAddOutlined} from '@ant-design/icons';
import DoQuiz from '../containers/DoQuiz';
const states = [
    {
        url:'DoQuiz',
        name:'App.DoQuiz',
        title:'Do Quiz',
        views: {
            main: DoQuiz
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