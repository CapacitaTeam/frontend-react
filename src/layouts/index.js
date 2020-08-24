import React, { useState, Children } from 'react';
import { Layout} from 'antd';
import Header from './Header';
import Sider from './Sider';
import './layout.css';
  
  const {Content } = Layout;

  const MainLayout = (props) => {
    const [collapsed, setCollapse] = useState(false);
    const [theme, setTheme] = useState("dark");

    const toggleTheme = (value) => {
      setTheme(value ? 'dark' : 'light');
    };

    const toggle = () => {
        setCollapse(!collapsed);
    };

    const {children} = props;
    const collapsedIconProps = {className: 'trigger',onClick: toggle};
    const navProps = {theme: theme, onChangeTheme: toggleTheme};

    return <Layout className="main_layout">
        <Sider collapsed={collapsed} theme={theme}/>
        <Layout className="site-layout" style={{overflow:'hidden'}}>
            <Header collapsed={collapsed} btn_collapse={collapsedIconProps} navProps = {navProps}/>
            <Content className="site-layout-background p-3" style={{margin: '24px 16px',overflow: 'initial'}}>
              {children}
            </Content>
        </Layout>
    </Layout>;
  }

export default MainLayout;