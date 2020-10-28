import React from 'react';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import Breadcrumb from "./Breadcrumb";

const NavbarLeft = (props) => (
    <div className="d-flex align-items-center">
        {(props.collapsed? <MenuUnfoldOutlined {...props.btn_collapse}/> : <MenuFoldOutlined {...props.btn_collapse}/>)}
        <Breadcrumb/>
    </div>
);

export default NavbarLeft;