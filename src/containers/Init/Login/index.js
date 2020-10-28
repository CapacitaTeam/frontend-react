/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import FormLogin from './Form';
import Card from "antd/lib/card";
import { message } from "antd";
import Logo from '!svg-react-loader?name=Icon!../../../layouts/Logo/logo.svg';
import authService from '../../../authService';
import Background from './background.svg';
//import './style.css';

import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const LOGIN_REQUEST = gql`
  
    mutation Login ($username: String!, $password: String!) {
      login(username: $username, password: $password){
        username
        token
      }

    }
  
`;

const validatePassword = (rule, value, callback) => {
  // if (!authService.isAuthenticated()) {
  //   return Promise.reject(
  //     new Error(
  //       'Revise sus credenciales.',
  //     ),
  //   );
  // }
  return Promise.resolve();
};

const Login = () => {

  const onFinish = async ({ username, password }) => {
    console.log(username, password);

    const { token } = await login_mutation({ variables: { username, password } })
      .then(res => res.data.login)
      .catch(err => err);

    if (token !== 'null') {
      message.success('¡Bienvenid@ a Capacita!');
      setTimeout(() => {
        authService.login(token)
      }, 300)
    }
    else
      message.error('Credenciales Incorrectas');
    // authService.login(token);

  };

  const [login_mutation] = useMutation(LOGIN_REQUEST)

  const loginProps = {
    className: "my-auto",
    style: {
      width: '300px'
    }
  }
  const logoProps = {
    className: "mw-100 h-100 mt-4 mb-4"
  }

  const formProps = {
    onFinish: onFinish,
    validatePassword: validatePassword
  }

  return (
    <section className="d-flex justify-content-center vh-100" style={{ backgroundImage: `url(${Background})` }}>
      <Card {...loginProps}>
        <Logo {...logoProps} />
        <FormLogin {...formProps} />
      </Card>
    </section>
  )
};

export default Login;