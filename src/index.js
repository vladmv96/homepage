import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import 'normalize.css';
import './style.css';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();