import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Contact from './components/Contact'
import Joke from './components/Joke'
import { css } from 'emotion'



const App = () => {
  const [code, setCode] = useState("");
  const [delivery, setDelivery] = useState(false)
  const [add, setAdd] = useState(false)

  if (!add) {
    return (
      <Router>
        <Route path="/">
          <div>
            <header>
              <Header />
            </header>
            <Joke />
            <div className={styles.bodyApp}>
              <div>
                <Search adc={add} setAdc={setAdd} setValue={setCode} value={code} del={delivery} setDel={setDelivery} />
              </div>
              <div>
                <List value={code} del={delivery} />
              </div>
            </div>
          </div>
        </Route>
      </Router>
    );
  } else {
    return (
      <Router>
        <div>
          <Contact adc={add} setAdc={setAdd} />
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
