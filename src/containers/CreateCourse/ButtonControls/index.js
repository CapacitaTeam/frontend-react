/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import Space from 'antd/lib/space';
import Button from 'antd/lib/button';
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
// Style
import style from '../style.module.scss'

const ButtonControl = (props) => {
  const {current, handleChange} = props;
  const className = classNames(style.steps_action)
  const buttonContentProps = { 
    align:"center",
    direction:"horizontal", 
    size:"middle",
    className
  }
  const buttonProps = {
    left:{
      type:"ghost", 
      icon:<LeftOutlined />,
      disabled:(current == 0),
      onClick: () => handleChange(false)
    },
    right:{
      type:"ghost",
      icon:<RightOutlined />,
      disabled:(current == 2),
      onClick: () => handleChange(true)
    },
    save:{
      type:"primary",
      disabled:(current < 2)
    }
  }

  return <Space {...buttonContentProps}>
            <Button {...buttonProps.left}/>
            <Button {...buttonProps.right}/>
            <Button {...buttonProps.save}>Guardar</Button>
        </Space>
};
  
export default ButtonControl;