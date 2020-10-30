import React from 'react'
import {PlayCircleOutlined} from '@ant-design/icons';
import Courses from '../containers/Courses';
const states = [
    {
        url:'Courses',
        name:'App.Courses',
        title:'Cursos',
        views: {
            main: Courses
        },
        data:{
            contentScrollable: false,
            nav: {
                type: 'menu',
                sort: 0,
                icon: <PlayCircleOutlined />
            }
        }
    }
];
export default states;