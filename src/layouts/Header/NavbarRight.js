import React from 'react';
import { UISref } from '@uirouter/react';
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import Button from 'antd/lib/button';
import Switch from 'antd/lib/switch';
import AvatarUser from './Avatar';
import {LoginOutlined} from '@ant-design/icons';

const menu = (props) => (
    <Menu>
        <Menu.Item>
            <UISref to="App" params={{view:'Logout'}}>
                <a>
                    <LoginOutlined className="text-danger"/>
                    <span className="text-danger ml-2 mr-2">
                        Cerrar session
                    </span>
                </a>
            </UISref>
        </Menu.Item>
        <hr/>
        <div className="d-flex justify-content-between pl-2 pr-2">
            <span>Tema</span>
            <Switch
                checked={props.name === 'dark'}
                onChange={props.changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
        </div>
        
    </Menu>
);

const NavbarRight = (props) => (
            <Dropdown overlay={menu(props.theme)} trigger={['click']} className="ml-2">
                <Button style={{height:40}}>
                    <span className="mr-3">
                        <span>{props.user.firstname} {props.user.lastname}</span>
                    </span>
                    <AvatarUser {...props} />
                </Button>
            </Dropdown>
);

export default NavbarRight;