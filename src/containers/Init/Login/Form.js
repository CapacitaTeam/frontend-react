import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// helper
import get from 'lodash/get';
// styles

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Wrong Email Address' : undefined;

const required = value => value ? undefined : 'required';

const FormLogin = props =>{
    return <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={props.onFinish}>
    <Form.Item name="username" rules={[{ required: true, type: 'email',message: 'Verifique su correo' }]}>
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo" />
    </Form.Item>

    <Form.Item name="password" rules={[{ required: true, message: 'Verifique su contaseña' }]}>
      <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Contraseña"/>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button" block>Iniciar</Button>
    </Form.Item>
  </Form>;
}

export default FormLogin;