/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import { Layout, Menu} from 'antd';
import Logo from '!svg-react-loader?name=Icon!../Logo/logo.svg';
import LogoNoText from '!svg-react-loader?name=Icon!../Logo/logo_without_text.svg';
import {DashboardOutlined, PlayCircleOutlined, AppstoreAddOutlined} from '@ant-design/icons';
import {UIRouterConsumer, UISref} from '@uirouter/react';

const Sider = props =>{
    const propsLogo = {
        width: 200,
        height: 58,
        className:'logo'
    };
    const propsLogoNoText = {
        width: 64,
        height: 58,
        className:'logo'
    };
    return <Layout.Sider trigger={null} theme={props.theme} collapsible collapsed={props.collapsed} style={{overflow: 'auto',minHeight: '100vh'}}>
           {(props.collapsed)?<LogoNoText {...propsLogoNoText}/>:<Logo {...propsLogo}/>}
           
           <UIRouterConsumer>
               { () => (
               <Menu theme={props.theme} mode="inline" defaultSelectedKeys={['1']} >
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        <UISref to="App.Dashboard" ><a>Dashboard</a></UISref>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<PlayCircleOutlined />}>
                        <UISref to="App.Courses" ><a>Cursos</a></UISref> 
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
                        <UISref to="App.CreateCourse" ><a>Crear Curso</a></UISref>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<AppstoreAddOutlined />}>
                        <UISref to="App.Quizzes" ><a>Quizzes</a></UISref>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<AppstoreAddOutlined />}>
                        <UISref to="App.CreateQuiz" ><a>Crear Quiz</a></UISref>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreAddOutlined />}>
                        <UISref to="App.Students" ><a>Estudiantes</a></UISref>
                    </Menu.Item>                   
                </Menu>
                )}
                
           </UIRouterConsumer>
            
        </Layout.Sider>
}

export default Sider;