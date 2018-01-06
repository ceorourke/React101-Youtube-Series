const css = require('./app.scss');

// console.log('Hello from app.js and webpack dev server!');

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>
      <h1 className="title">Hello world</h1>
      <p>Testing rendering with JSX</p>
    </div>
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
);