import React from 'react'
import Dashboard from '../containers/Dashboard';
import {DashboardOutlined} from '@ant-design/icons';
const states = [
    {
        url:'Dashboard',
        name:'App.Dashboard',
        title:'Dashboard',
        views: {
            main: Dashboard
        },
        data: {
            nav: {
              type: 'menu',
              sort: 0,
              icon: <DashboardOutlined/>
            }
        }
    }
];
export default states;