import React from 'react';
import { Layout} from 'antd';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

const Header = props => 
    <Layout.Header className="site-layout-background space-align-container d-flex justify-content-between align-items-center pr-3 pl-3" style={{ padding: 0 }}>
        <NavbarLeft {...props} />
        <NavbarRight user={{firstname:"Juan",lastname:"Perez"}} theme={{name:props.navProps.theme,changeTheme:props.navProps.onChangeTheme}}/>
    </Layout.Header>

export default Header;