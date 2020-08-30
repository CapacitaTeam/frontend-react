import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'antd/dist/antd.js';
import 'antd/dist/antd.css';

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
