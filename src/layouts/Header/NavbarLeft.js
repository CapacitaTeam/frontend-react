import React from 'react';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';

const NavbarLeft = (props) => (
    <div>
        {(props.collapsed? <MenuUnfoldOutlined {...props.btn_collapse}/> : <MenuFoldOutlined {...props.btn_collapse}/>)}
    </div>
);

export default NavbarLeft;