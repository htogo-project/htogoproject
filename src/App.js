import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Search from './components/Search'
import { css } from 'emotion'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className={styles.bodyApp}>
        <div>
          <Search setValue={setCode} value={code} cousine={type} setCousine={setType} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  bodyApp: css`
    background-color: #282c34;
    min-height: 100vh;
  `,
}

export default App;
