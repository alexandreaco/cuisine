import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();

var css = require("./scss/main.scss");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
