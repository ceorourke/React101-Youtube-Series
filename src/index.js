const css = require('./app.scss');

// console.log('Hello from app.js and webpack dev server!');

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <App />,
    document.getElementById('root')
);