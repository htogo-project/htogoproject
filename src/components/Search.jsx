import React, { useState } from 'react';
import { css } from 'emotion';
import list from "../Humboldttogo.json"




const Search = (props) => {
    const cities = ["Humboldt", "Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "Whitethorn", "Scotia", "Hydesville"]
    const [delivery, setDelivery] = useState(false)
    const [city, setCity] = useState("Humboldt")
    const [key, setKey] = useState("")
    const [type, setType] = useState("")
    const [options, setOptions] = useState("Search type")

    // classes states
    const [classActive, setClassActive] = useState(false)
    const [showlist, setShowlist] = useState(false)

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


    const handleClick = (event) => {
        event.preventDefault()
        const actualCity = event.target.textContent
        setCity(event.target.textContent)
        props.setValue(event.target.textContent)
        setShowlist(true)

        helper(list, actualCity, key, delivery, type)
    }


    let str = ""
    var getType = (e) => {
        str += e.currentTarget.value;
        setKey(str)
        helper(list, city, key, delivery, type)
    }

    const clicking = () => {
        if (showlist) {
            setShowlist(false)
        } else {
            setShowlist(true)
        }
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

    const openNav = () => {
        setClassActive(true);
    }
    const closeNav = () => {
        setClassActive(false);
    }

    return (
        <div>
            <div className={styles.button_slider}>
                <div className={!classActive ? styles.sidenav : styles.sidenavClicked}>
                {/* <div className={styles.sidenavClicked}> */}

                    <a className={styles.closebtn} onClick={closeNav}>&times;</a>
                    <div className={styles.wrapper}>
                        <div onClick={clicking} className={styles.dropdown}>
                            <button className={styles.dropbtn}>{city}</button>
                            <div className={showlist ? styles.dropdown_clicked : styles.dropdown_unclicked}>
                                {cities.map((city, index) =>
                                    <a key={index} onClick={handleClick}>{city}</a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.filter_options}>
                        <div className={styles.filter_option} onClick={changeTypeRestaurant}>Restaurants</div>
                        <div className={styles.filter_option} onClick={changeTypeOther}>Other</div>
                        <div className={styles.filter_option}>
                            <input onClick={isItDelivery} type="checkbox" name="option" value="Delivery" />
                            <label for="Delivery" className={styles.label}> Delivery</label>
                        </div>
                    </div>
                </div>

                <span className={styles.slide_open_button} onClick={openNav}>&#9776;</span>
                <input onChange={getType} className={styles.typeSearch} placeholder={options} />

            </div>
            {/* <Delivery iscity={city} iskey={key} res={props.restaurant} setR={props.setRestaurant} del={delivery} setDel={setDelivery} /> */}
        </div>
    )
}


const styles = {
    delivery: css`
        display: none,
        color: black;
        font-weight: bold;
    `,
    button_slider: css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #FFFFFF;
        // border: 3px solid blue;
        @media (max-width: 800px) {
            width: 80vw;
         }
         div a {
             color: #a4a4a4;
         }
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
    dropbtn: css`
        border: 1px outset white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin-left: 20px;
        text-align: center;
        cursor: pointer;
        outline: none;
        height: 50px;
        width: 125px;
           button {
            outline: none;
        }
        `,
    dropdown_unclicked: css`
        display:none;
      a {  
        display:none;
        margin: 0;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
    `,
    dropdown_clicked: css`
        position: absolute;
        background-color: #f9f9f9;
        display:block;
        text-align: center;
        margin-left: 20px;
        a {
            background-color: #f9f9f9;
            width: 125px;
            z-index: 1;
        } a:hover {
            background-color: #f1f1f1;
        } 

        ,`,

    filter_options: css`
        // border: 3px solid white;
        color: #322a2a;
        font-weight: bold;
        margin-left: 10px;
        margin: 20px;
        padding: 0px;
        width: 70%;
    `,
    filter_option: css`
         margin-left: 10px;
        cursor: pointer;
        margin-top: 20px;
        font-size: 16px;
        // border: 3px solid white;
    `,
    label: css`
        margin-left: 10px;
    `,
    typeSearch: css`
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: none;
        background-color: white;
        outline: none;
        width: 500px;
        height: 50px; 
        font-size: 15px;
        margin-top: 50px;
        @media (max-width: 816px) {
            margin-left: -15px;
            width: 70vw;
            margin-top: 40px;
         }
      
     `,
    /* The side navigation menu */
    sidenav: css`{
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #008037; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    &:hover {
            color: #f1f1f1;
          }
          @media screen and (max-height: 450px) {
            font-size: 18px;
    }
    @media screen and (max-height: 450px) {
        padding-top: 15px;
  }`,

    sidenavClicked: css`{
    height: 100%; /* 100% Full-height */
    width: 250px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #008037; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    &:hover {
            color: #f1f1f1;
          }
          @media screen and (max-height: 450px) {
            font-size: 18px;
    }
    @media screen and (max-height: 450px) {
        padding-top: 15px;
  }`,

   slide_open_button: css`
        position: absolute;
        top: 0;
        left: 25px;
        font-size: 30px;
        cursor: pointer;
  `,
    closebtn: css` {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 25px;
        font-size: 46px;
        margin-left: 50px;
        color: white;
  }`,

    main: css` {
        transition: margin-left .5s;
        padding: 20px;
  }`,


}

export default Search;
