import React, { useState } from 'react';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Add from './components/Add'
import Email from './components/Email'

import { css } from 'emotion'

import './App.css';

function App() {
  const [code, setCode] = useState("");
  const [delivery, setDelivery] = useState(false)
  const [add, setAdd] = useState(false)

  if (!add) {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className={styles.bodyApp}>
          <div>
            <Search setValue={setCode} value={code} del={delivery} setDel={setDelivery} />
          </div>
          <div className={styles.add}>
            <Add adc={add} setAdc={setAdd} />
          </div>
          <div>
            <List value={code} del={delivery} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
    <div>
      <header>
        <Header />
      </header>
      <Email adc={add} setAdc={setAdd}/>
    </div>
    )
  }
}

const styles = {
  bodyApp: css`
    min-height: 100vh;
  `,
  add: css`
  position: absolute;
  margin-botton: 0px;
  cursor: pointer;
  `
}

export default App;
