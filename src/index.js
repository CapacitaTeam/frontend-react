import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'antd/dist/antd.js';
import 'antd/dist/antd.css';

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
