import React, { useState } from 'react';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import { css } from 'emotion'

import './App.css';

function App() {
  const [code, setCode] = useState("");
  const [type, setType] = useState("");

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className={styles.bodyApp}>
        <div>
          <Search setValue={setCode} value={code} cousine={type} setCousine={setType} />
        </div>
        <div>
          <List value={code} cousine={type} />
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
