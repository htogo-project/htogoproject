import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css'
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Contact from './components/Contact'

import datas from "./Humboldttogo.json"
import 'bootstrap/dist/css/bootstrap.min.css';


import { css } from 'emotion'



const App = () => {
  const [code, setCode] = useState("Humboldt");
  const [add, setAdd] = useState(false)
  const [restaurants, setRestaurants] = useState(datas)
  const [businessType, setBusinessType] = useState("businesses")




  if (!add) {
    return (
      <Router>
        <Route path="/">
          <div className={styles.Itsabody}>
          <div className={styles.header}>
            <header>
              <Header />
            </header>
          </div>
          <div className={styles.search}>
            <Search setBusiness={setBusinessType} restaurant={restaurants} setRestaurant={setRestaurants} adc={add} setAdc={setAdd} setValue={setCode} value={code} />
          </div>
          {/* <div className={styles.login}>
            <span> <a>For Business</a> </span>
            <span> <a>Login</a> </span>
            <span> <a>Register</a> </span>
          </div> */}
          <div className={styles.bodyApp}>
            <List business={businessType} restaurant={restaurants} setRestaurant={setRestaurants} contact={add} setContact={setAdd} value={code} />
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
  Itsabody: css`
  overflow-x: hidden;
  `,
  header: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`,
  search: css`
    display: flex;
    justify-content: left;
    align-items: left;
    margin-left: 90px;
    // border: 3px solid green;
    @media (max-width: 450px) {
      display: flex;
      justify-content: center;
      align-items: center;
      // margin-left: 30px;
  }
  @media (max-width: 280px) {
    margin-left: 30px;
  }
}

  `,
  bodyApp: css`
    margin-top: 30px;
    display: flex;
    width: 450px;
    align-items: left;
    justify-content: left;
    margin-left: 90px;
    overflow-x: hidden;
    @media (max-width: 850px) {
      width: 90%;
      // border: 3px solid red;
      margin-left: 30px;
      display: flex;
      align-items: left;
      justify-content: left;
      overflow-x: hidden;
  }
    @media (max-width: 450px) {
      width: 98vw;
      // border: 3px solid red;
      margin-left: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow-x: hidden;
  }
  @media (max-width: 280px) {
    width: 98vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left:0px;
}
  `,
  login: css`
    color: white;
  `

}


export default App;
