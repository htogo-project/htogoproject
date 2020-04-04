import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Add from './components/Add'
import Contact from './components/Contact'
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
            <Search adc={add} setAdc={setAdd} setValue={setCode} value={code} del={delivery} setDel={setDelivery} />
          </div>
          <div>
            <List value={code} del={delivery} />
          </div>
        </div>
        {/* <Route exact path="/contact12">
          <Contact />
        </Route> */}
          <div className={styles.add}>
            <Add adc={add} setAdc={setAdd} />
          </div>
      </div>
    );
  } else {
    return (
      <Router>

    <div>
      <header>
        <Header />
      </header>
      <Contact adc={add} setAdc={setAdd} />

      {/* <Email adc={add} setAdc={setAdd}/> */}
    </div>
    </Router>

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
