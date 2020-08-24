/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import Space from 'antd/lib/space';
import Button from 'antd/lib/button';
import { LeftOutlined,RightOutlined } from '@ant-design/icons';

const ButtonControl = (props) => {
  
  return <Space align="center" direction="horizontal" size="middle">
            <Button type="ghost" shape="round" icon={<LeftOutlined />} onClick={() => props.handleChange(false)} disabled={(props.current == 0)}/>
            <Button type="ghost" shape="round" icon={<RightOutlined />} onClick={() => props.handleChange(true)} disabled={(props.current == 2)}/>
            <Button type="primary" disabled={(props.current < 2)}>Guardar</Button>
        </Space>
};
  
export default ButtonControl;