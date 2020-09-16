import React, { useState, useEffect } from 'react';
import { css } from 'emotion';
import list from "../Humboldttogo.json"


import List from './List'
import ListSize from './ListSize'



const Search = (props) => {
    const cities = ["Humboldt", "Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "Whitethorn", "Scotia", "Hydesville"]

    //setting initial states
    const [places, setPlaces] = useState(list);
    const [displayedPlaces, setdisplayedPlaces] = useState(list);
    const [businessType, setBusinessType] = useState("");
    const [delivery, setDelivery] = useState(false)
    const [city, setCity] = useState("Humboldt")
    const [key, setKey] = useState("")
    const [type, setType] = useState("")

    //setting placeholder according with type of business
    const [options, setOptions] = useState("Search type")

    //navbar classes states
    const [showNavBar, setshowNavBar] = useState(false)
  

    const helper = (city, key, type, delivery) => {
        const filtered = delivery ? places.filter(el => el.City === city).filter(el => el.Info.includes("Delivery")) : places.filter(el => el.City === city);
        const filterKey = key.length > 0 ? filtered.filter(el => el.Keywords.toLowerCase().includes(key)) : filtered;
        const filterType = type.length > 0 ? filterKey.filter(el => el.Business === type) : filterKey;

        setdisplayedPlaces(filterType);       
    }



    const filterByCity = (event) => {
        let actualCity = event.target.value
        setCity(actualCity);
       return helper(event.target.value, key, type, delivery)
    } 


    let str = ""
    var getType = (e) => {
         str += e.currentTarget.value;
        setKey(str)
        return helper(city, key, type, delivery)
    }


    const isItDelivery = () => {
 
    }

    const changeTypeOther = (e) => {
  
    }

    const changeTypeRestaurant = (e) => {
  
    }

    const changeTypeAll = () => {
    }

    return (
        <div>
        <div>
            <nav className={showNavBar ? styles.sidenavClicked : styles.sidenav}>
                <a className={styles.closebtn} onClick={()=>setshowNavBar(false)}>&times;</a>
                <select onChange={filterByCity}>
                    <option value="">Please choose a city</option>
                    {cities.map((city, index) =>
                        <option key={index} value={city}>{city}</option>
                    )}
                </select>
                <ul className={styles.filter_options}>
                    <li onClick={changeTypeRestaurant}>Restaurants</li>
                    <li onClick={changeTypeOther}>Other</li>
                    <li>
                        <label> Delivery</label>
                        <input onClick={isItDelivery} type="checkbox" name="option" value="Delivery" />
                    </li>
                </ul>
            </nav>
            <span className={styles.slide_open_button} onClick={()=>setshowNavBar(true)}>&#9776;</span>
            <input onChange={getType} className={styles.typeSearch} placeholder={options} />
        </div>
        <ListSize business={businessType} restaurant={displayedPlaces} value={city} />
        <List restaurant={displayedPlaces}/>
        </div>
    )
}


const styles = {
    closebtn: css` 
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 25px;
        font-size: 46px;
        margin-left: 50px;
        color: white;
  `,
    dropdown: css`
        display: inline-block;
        margin-left: 0px;
        font-size: 16px;
        outline: none;
        margin: 0;
        div a {
            color: black;
            cursor: pointer;
            margin: 0;
            font-size: 14px;
            text-align: center;
            padding: 12px 16px;
            text-decoration: none;
        }
       `
    ,
    filter_options: css`
        // border: 3px solid white;
        color: #322a2a;
        font-weight: bold;
        margin-left: 10px;
        margin: 20px;
        padding: 0px;
        width: 70%;
        li {
            margin-left: 10px;
            cursor: pointer;
            margin-top: 20px;
            font-size: 16px;
            // border: 3px solid white;
        }
    `,
    label: css`
        margin-left: 10px;
    `,
    typeSearch: css`
        // border: 3px solid brown;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: none;
        background-color: white;
        outline: none;
        width: 480px;
        height: 50px; 
        font-size: 15px;
        margin-top: 20px;
        @media (max-width: 816px) {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            margin-left: -15px;
            width: 70vw;
            margin-top: 15px;
         }
         @media (min-width: 1023px) {
            margin-left: 40%;
        }
      
     `,
    /* The side navigation menu */
    sidenav: css`{
        height: 100%; 
        width: 0; 
        position: fixed;
        z-index: 100; 
        top: 0; 
        left: 0;
        background-color: #008037;
        overflow-x: hidden; 
        padding-top: 60px; 
        transition: 0.5s;
  }`,

    sidenavClicked: css`{
        height: 100%;
        width: 250px;
        position: fixed; 
        z-index: 100; 
        top: 0; 
        left: 0;
        background-color: #008037;
        overflow-x: hidden; 
        padding-top: 60px; 
        transition: 0.5s;
  }`,

    slide_open_button: css`
        position: absolute;
        top: 0;
        left: 25px;
        font-size: 30px;
        cursor: pointer;
  `,
  
}

export default Search;
