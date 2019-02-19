import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'normalize.css';
import './styles/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();