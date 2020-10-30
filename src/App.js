/*
 * @Description: 
 * @Version: 2.0
 * @Autor: 吴振国
 * @Date: 2020-10-19 10:09:16
 * @LastEditors: 吴振国
 * @LastEditTime: 2020-10-26 11:24:54
 */
import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
