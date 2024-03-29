import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.js';
import 'antd/dist/antd.css';

// components
import App from './containers/App';
import Apollo from './apollo'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'

ReactDOM.render(
  <Apollo>
    <App />
  </Apollo>,
  document.getElementById('root')
);
