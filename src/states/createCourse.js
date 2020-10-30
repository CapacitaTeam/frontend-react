import React from 'react'
import {AppstoreAddOutlined} from '@ant-design/icons';
import CreateCourse from '../containers/CreateCourse';
const states = [
    {
        url:'CreateCourse',
        name:'App.CreateCourse',
        title:'Crear Cursos',
        views: {
            main: CreateCourse
        },
        data: {
            nav: {
              type: 'menu',
              sort: 0,
              icon: <AppstoreAddOutlined/>
            }
        }
    }
];
export default states;