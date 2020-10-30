/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import {UIRouterConsumer, UISref} from '@uirouter/react';
// antd
import {DashboardOutlined, PlayCircleOutlined, AppstoreAddOutlined} from '@ant-design/icons';
import { Layout, Menu} from 'antd';
//import Menu from 'antd/lib/menu';
// custom icons
import Logo from '!svg-react-loader?name=Icon!../Logo/logo.svg';
import LogoNoText from '!svg-react-loader?name=Icon!../Logo/logo_without_text.svg';
// helpers
import get from 'lodash/get'
import last from 'lodash/last'
import drop from 'lodash/drop'
import split from 'lodash/split'
import cloneDeep from 'lodash/cloneDeep'
// components
import getNavType from './getNavType'
import getStateTree from './getStateTree'
// styles
import style from '../styles.module.scss'

function baseMenuItem(props) {
    const { key: only, intl, title, name, _children, data } = props
  
    const key = last(split(name, '.'))
    const iconComponent = get(data, 'nav.icon')
  
    if (_children.length) {
      const title = (
        <span>
          {iconComponent}
          {title}
        </span>
      )
  
      const children = _children.map(baseMenuItem)
  
      const props = { key, title, children, only }
  
      return <Menu.SubMenu {...props} />
    } else {
      return (
        <Menu.Item key={key} className="d-flex align-items-center" icon={iconComponent}>
          <UISref to={name}><a>{title}</a></UISref>
        </Menu.Item>
      )
    }
  }

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
               { ({ stateService }) => {
                   const states = cloneDeep(stateService.get())
                   const menu = getNavType(states, 'menu')
                   const statesMenu = getStateTree(menu, 2)
                   const activeKeys = split(stateService.current.name, '.')

                   const propsMenu = {
                        mode: 'inline',
                        theme: props.theme,
                        children: statesMenu.map(baseMenuItem),
                        className: style.SideMenu,
                        defaultOpenKeys: drop(activeKeys),
                        defaultSelectedKeys: last(activeKeys)
                    }

                    return <Menu {...propsMenu} />
               }}
                
           </UIRouterConsumer>
            
        </Layout.Sider>
}

export default Sider;