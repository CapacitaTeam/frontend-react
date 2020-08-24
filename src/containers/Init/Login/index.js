/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import FormLogin from './Form';
import Card from "antd/lib/card";
import Logo from '!svg-react-loader?name=Icon!../../../layouts/Logo/logo.svg';
import authService from '../../../authService';
import Background from './background.svg';
//import './style.css';

const onFinish = values => {
    authService.login(values);
  };

const Login = () => {
  const loginProps = {
    className:"my-auto",
    style:{
      width: '300px'
    }
  }
  const logoProps = {
    className:"mw-100 h-100 mt-4 mb-4"
  }

  const formProps = {
    onFinish: onFinish
  }

  return (
    <section className = "d-flex justify-content-center vh-100" style={{ backgroundImage: `url(${Background})` }}>
      <Card {...loginProps}>
        <Logo {...logoProps}/>
        <FormLogin {...formProps}/>
      </Card>
    </section>
  )
};
  
  export default Login;