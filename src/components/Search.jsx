import React, { useState } from 'react';
import { css } from 'emotion';
import list from "../Humboldttogo.json"


import List from './List'
import ListSize from './ListSize'



const Search = (props) => {
    const cities = ["Humboldt", "Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "Whitethorn", "Scotia", "Hydesville"]

    //setting initial states
    const [places, setPlaces] = useState(list);
    const [displayedPlaces, setdisplayedPlaces] = useState(list);
    const [filteredBy, setfilteredBy] = useState('');
    const [businessType, setBusinessType] = useState("businesses");
    const [delivery, setDelivery] = useState(false)
    const [city, setCity] = useState("Humboldt")
    const [key, setKey] = useState("")
    const [type, setType] = useState("")

    //setting placeholder according with type of business
    const [options, setOptions] = useState("Search type")

    //navbar classes states
    const [showNavBar, setshowNavBar] = useState(false)

    const helper = (datas, city, key, delivery, type) => {
        let arr = [];
        if (city !== 'Humboldt') {
            if (delivery) {
                if (type.length > 1) {
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].City === city && datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Info.includes("Delivery") && datas[i].Business === type) {
                            arr.push(datas[i])
                        }
                    }
                    props.setRestaurant(arr)
                } else {
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].City === city && datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                            arr.push(datas[i])
                        }
                    }
                    props.setRestaurant(arr)
                }
            } else if (!delivery) {
                if (type.length > 1) {
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].City === city && datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Business === type) {
                            arr.push(datas[i])
                        }
                    }
                    props.setRestaurant(arr)
                } else {
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].City === city && datas[i].Keywords.toLowerCase().includes(key.toLowerCase())) {
                            arr.push(datas[i])
                        }
                    }
                    props.setRestaurant(arr)
                }
            }
        } else if (city === 'Humboldt') {
            if (delivery) {
                if (type.length > 1) {
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Info.includes("Delivery") && datas[i].Business === type) {
                            arr.push(datas[i])
                        }
                    }
                    props.setRestaurant(arr)
                } else {
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                            arr.push(datas[i])
                        }
                    }
                    props.setRestaurant(arr)
                }
            } else if (!delivery) {
                if (type.length > 1) {
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Business === type) {
                            arr.push(datas[i])
                        }
                    }
                    props.setRestaurant(arr)
                } else {
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].Keywords.toLowerCase().includes(key.toLowerCase())) {
                            arr.push(datas[i])
                        }
                    }
                    props.setRestaurant(arr)
                }
            }
        }
    }


    const filterByCity = (event) => {
        setCity(event.target.value);
        const filtered = places.filter(el => el.City === event.target.value);
        setfilteredBy("city");
        return setdisplayedPlaces(filtered);
        // event.preventDefault()
        // const actualCity = event.target.value
        // setCity(event.target.value)
        // props.setValue(event.target.value)
        // helper(list, actualCity, key, delivery, type)
    }


    let str = ""
    var getType = (e) => {
         str += e.currentTarget.value;
        // console.log(str)
        setKey(str)
        console.log(str)
        let filtered = filteredBy.length > 0 ? places.filter(el => el.Keywords.includes(e.currentTarget.value)) : displayedPlaces.filter(el => el.Keywords.includes(e.currentTarget.value));
        // setfilteredBy("type");
        return setdisplayedPlaces(filtered);

    }


    const isItDelivery = () => {
        if (!delivery) {
            setDelivery(true)
            helper(list, city, key, true, type)
        } else if (delivery) {
            setDelivery(false)
            helper(list, city, key, false, type)
        }
    }

    const changeTypeOther = (e) => {
        props.setBusiness("others")
        setOptions("petshop, iphone repair, sports,...")
        let content = e.currentTarget.textContent
        setType(content)
        let arr = []
        for (var i = 0; i < list.length; i++) {
            if (list[i].Business === "Other") {
                arr.push(list[i])
            }
        }
        helper(arr, city, key, delivery, content)
    }

    const changeTypeRestaurant = (e) => {
        props.setBusiness("restaurants")
        setOptions("pizza, burgers, mexican...")
        let content = e.currentTarget.textContent
        setType(content)

        let arr = []
        for (var i = 0; i < list.length; i++) {
            if (list[i].Business === "Restaurants") {
                arr.push(list[i])
            }
        }
        helper(arr, city, key, delivery, content)
    }

    const changeTypeAll = () => {
        helper(list, city, key, delivery, type)
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
