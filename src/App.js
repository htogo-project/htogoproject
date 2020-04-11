import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Contact from './components/Contact'
import datas from "./Humboldttogo.json"
import { css } from 'emotion'



const App = () => {
  const [code, setCode] = useState("Humboldt");
  const [add, setAdd] = useState(false)
  const [restaurants, setRestaurants] = useState(datas)

  if (!add) {
    return (
      <Router>
        <Route path="/">
          <div>
            <header>
              <Header />
            </header>
            <div className={styles.bodyApp}>
              <div>
                <Search restaurant={restaurants} setRestaurant={setRestaurants} adc={add} setAdc={setAdd} setValue={setCode} value={code} />
              </div>
              <div>
                <List restaurant={restaurants} setRestaurant={setRestaurants} contact={add} setContact={setAdd} value={code} />
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
