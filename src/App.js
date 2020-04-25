import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Contact from './components/Contact'
import SlideMenu from 'react-slide-menu'

import stores from "./Stores.json"
import datas from "./Humboldttogo.json"

import { css } from 'emotion'



const App = () => {
  const [code, setCode] = useState("Humboldt");
  const [add, setAdd] = useState(false)
  const [restaurants, setRestaurants] = useState(datas)

  const [slideMenuActive, setslideMenuActive] = useState(false)


  var nav = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'Restaurants', path: '/restaurants'},
    { id: 'discover', label: 'Others', path: '/others'},
  ]

  const closeMenu = () => {
    if (slideMenuActive) {
      setslideMenuActive(false)
    } else {
      setslideMenuActive(true)
    }
  }
  // let location = useLocation();
 if (window.location.pathname === "/others")  {
    datas = stores
 }


  if (!add) {
    return (
      <Router>
        <Route path="/">
          <div className={styles.slide}>
            {/* <SlideMenu
              active={slideMenuActive}
              nav={nav}
              reactRouter={false}> */}
              <div>
                {/* <button className={styles.button} onClick={closeMenu}> | | | </button> */}
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
            {/* </SlideMenu> */}
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
  `,
  slide: css`
    background-color: white !important;
  `,
  button: css`
    position: absolute;
    margin-top: 80px;
    margin-left: 1%;
    border-color: #e7e7e7;
    color: black;
    cursor: pointer;
    -webkit-transform: rotate(-90deg);
    width: 50px;
    height: 30px;
    outline: none;
    &:hover{
      background: #e7e7e7;
    }
  `
}


export default App;
