import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css'
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Contact from './components/Contact'
import Map from './components/Map'
import UserView from './components/UserView'
import ListSize from './components/ListSize'



import datas from "./Humboldttogo.json"
import 'bootstrap/dist/css/bootstrap.min.css';


import { css } from 'emotion'



const App = () => {
  const [code, setCode] = useState("Humboldt");
  const [add, setAdd] = useState(false)
  const [restaurants, setRestaurants] = useState(datas)
  const [businessType, setBusinessType] = useState("businesses")
  const [map, setMap] = useState(false)
  const [displayMap, setdisplayMap] = useState(styles.map)

  useEffect(() => {
    if (window.innerWidth < 767) {
      if (map) {
        setdisplayMap(styles.Viewmap)
      } else {
        setdisplayMap(styles.map)
      }
    } else {
      setdisplayMap(styles.Viewmap)
      setMap(false)
    }
  })


  return (
    <Router>
      <Route path="/">
        <div>
          <Header />
          <Search restaurant={restaurants} setRestaurant={setRestaurants} setValue={setCode}/>
          <UserView maplist={setMap} m={map} />
          {/* <ListSize business={businessType} restaurant={restaurants} value={code} /> */}
          {/* <List business={businessType} restaurant={restaurants} setRestaurant={setRestaurants} contact={add} setContact={setAdd} value={code} /> */}
          <Map restaurant={restaurants} />
        </div>
      </Route>
    </Router>
  )

  //   if (!add && !map) {
  //     return (
  //       <Router>
  //         <Route path="/">
  //           <div className={styles.body_wrapper}>
  //             <div className={styles.header_search_wrapper}>
  //               <div className={styles.header}>
  //                 <header>
  //                   <Header />
  //                 </header>
  //               </div>
  //               <div className={styles.search}>
  //                 <Search setBusiness={setBusinessType} restaurant={restaurants} setRestaurant={setRestaurants} adc={add} setAdc={setAdd} setValue={setCode} value={code} />
  //               </div>
  //             </div>
  //             <div className={styles.user_view}>
  //               <UserView maplist={setMap} m={map} />
  //             </div>
  //             <div>
  //               <ListSize business={businessType} restaurant={restaurants} value={code} />
  //             </div>
  //             <div className={styles.list_wrapper}>
  //               <List business={businessType} restaurant={restaurants} setRestaurant={setRestaurants} contact={add} setContact={setAdd} value={code} />
  //               <div className={displayMap}>
  //                 <Map restaurant={restaurants} />
  //               </div>
  //             </div>
  //           </div>
  //         </Route>
  //       </Router>
  //     );
  //   } else if (!add && map) {
  //     return (
  //       <Router>
  //         <Route path="/">
  //           <div className={styles.body_wrapper}>
  //             <div className={styles.header_search_wrapper}>
  //               <div className={styles.header}>
  //                 <header>
  //                   <Header />
  //                 </header>
  //               </div>
  //               <div className={styles.search}>
  //                 <Search setBusiness={setBusinessType} restaurant={restaurants} setRestaurant={setRestaurants} adc={add} setAdc={setAdd} setValue={setCode} value={code} />
  //               </div>
  //             </div>
  //             <div className={styles.user_view}>
  //               <UserView maplist={setMap} m={map} />
  //             </div>
  //             <div>
  //               <ListSize business={businessType} restaurant={restaurants} value={code} />
  //             </div>
  //             <div className={styles.list_wrapper}>
  //               {/* <List maplist={setMap} business={businessType} restaurant={restaurants} setRestaurant={setRestaurants} contact={add} setContact={setAdd} value={code} /> */}
  //               <Map restaurant={restaurants} />
  //             </div>
  //           </div>
  //         </Route>
  //       </Router>
  //     )
  //   } else {
  //     return (
  //       <Router>
  //         <div>
  //           <Contact adc={add} setAdc={setAdd} />
  //         </div>
  //       </Router>
  //     )
  //   }
}

const styles = {
  body_wrapper: css`
    // border: 3px solid purple;
    overflow-x: hidden;
    @media (min-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `,
  header_search_wrapper: css`
    position: fixed;
    // border: 3px solid black;
    background-color: white;
    width: 100vw;
    z-index: 99;
    @media (min-width: 767px) {
      width: 100vw;
      top: 0px;
    }
  `,
  header: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`,
  search: css`
  // border: 3px solid green;
    display: flex;
    justify-content: left;
    align-items: left;
    margin-left: 90px;
    @media (max-width: 450px) {
      display: flex;
      justify-content: center;
      align-items: center;
  }
    @media (max-width: 280px) {
      margin-left: 30px;
  }
}
  `,
  user_view: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  list_wrapper: css`
    // border: 3px solid blue;
    width: 100%;
    height: 100vh;
    margin-top: 230px;
    @media (width: 280px) {
      position: absolute:
      margin-top: 0px;
      width: 98vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left:0px;
    }
    @media (min-width: 767px) {
      width: 80vw;
      margin-top: 180px;
      margin-left: 0px;
      text-align: left;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
    }
    @media (min-width: 1000px) {
      width: 60vw;
      height: 100vh;
    }
}
  `,
  map: css`
    display: none;
  `,
  Viewmap: css`
    display: flex;
`,
  login: css`
    color: white;
  `,
}


export default App;
