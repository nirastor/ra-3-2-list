/* eslint-disable react/jsx-filename-extension */
/* Можно ли переименовывать index.js не нарушит ли это entry point */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
