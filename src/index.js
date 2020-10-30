/*
 * @Description: 
 * @Version: 2.0
 * @Autor: 吴振国
 * @Date: 2020-10-19 10:09:16
 * @LastEditors: 吴振国
 * @LastEditTime: 2020-10-29 10:56:58
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './admin';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
