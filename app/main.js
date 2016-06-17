import 'babel-polyfill';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
var css = require("./scss/main.scss");


ReactDOM.render(<App/>, document.getElementById('app'));
