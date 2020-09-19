import React, { useState, useEffect, useContext } from 'react';
import { ListContext } from './ListContext';
import { css } from 'emotion';


import list from "../Humboldttogo.json";


const Search = () => {
    const { city, setCity } = useContext(ListContext);
    const { type, setType } = useContext(ListContext);
    const { places, setPlaces } = useContext(ListContext);


    const [delivery, setDelivery] = useState(false);
    const [keyword, setKeyword] = useState("");

    const cities = ["Humboldt", "Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "Whitethorn", "Scotia", "Hydesville"];

    //setting placeholder according with type of business
    const [options, setOptions] = useState("Search type");



    const setList = (city, key, type, delivery) => {
        if (type === "Other") {
            setOptions("pet shop, flowers, books...")
        } else if (type === "Restaurants") {
            setOptions("tacos, sushi, icecream...")
        } else {
            setOptions("Search type");
        }
        const filterCity = city !== "Humboldt" ? list.filter(el => el.City === city) : list;
        const filtered = delivery ? filterCity.filter(el => el.Info.includes("Delivery")) : filterCity;
        const filterKey = key.length > 0 ? filtered.filter(el => el.Keywords.toLowerCase().includes(key)) : filtered;
        const filterType = type !== "businesses" ? filterKey.filter(el => el.Business === type) : filterKey;

        return filterType;
    }

    useEffect(() => {
        setPlaces(setList(city, keyword, type, delivery));
    }, [city, keyword, type, delivery]);


    const test = () => {
        const finalList = setList(city, keyword, type, delivery);
        console.log(setList(city, keyword, type, delivery))
        setPlaces(finalList)
    }
    let str = ""
    var getKeyword = (e) => {
        str += e.currentTarget.value;
        setKeyword(str)
    }


    const setFilter= (e) => {
        if (type !== e.target.textContent) {
             setType(`${e.target.textContent}`);
             e.target.textContent === "Other" ? e.target.parentNode.childNodes[0].style.backgroundColor ="white" : e.target.parentNode.childNodes[1].style.backgroundColor ="white"
             e.target.style.backgroundColor = "#8fbc8f"
         } else  {
            setType("businesses");
            e.target.style.backgroundColor = "white"
        } 
    }

    const toggleDelivery = (e) => {
        if (delivery) {
            setDelivery(false);
            e.target.style.backgroundColor = "white";
        } else {
            setDelivery(true);
           e.target.style.backgroundColor = "#8fbc8f";

       } 
    }


    return (
        <div  className={styles.search_wrapper}>
            <input onChange={getKeyword} className={styles.typeSearch} placeholder={options} />
            <select className={styles.dropdown} onChange={(e) => setCity(e.target.value)}>
                <option value="">City</option>
                {cities.map((city, index) =>
                    <option key={index} value={city}>{city}</option>
                )}
            </select>
            <div className={styles.filter_options}>
                <button onClick={setFilter}>Restaurants</button>
                <button onClick={setFilter}>Other</button>
                <button onClick={toggleDelivery}>Delivery</button>
            </div>
        </div>

    )
}


const styles = {
    search_wrapper: css`
        // border: 2px solid red;
        margin-top: 3px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        width: 70%;
        height: 80%;
        @media (max-width: 767px) {
            margin-top: 0px;
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;        
        } 
    `,
    dropdown: css`
        width: 20%;
        height: 40%;
        border: none;
        outline: none;
        background-color: white;
        font-size: 15px;
        padding: 1px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
        option {
            text-align: center;
            color: #322a2a;

        }
       `
    ,
    filter_options: css` 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-top: 5px;
        background-color: white;
        width: 60%;
        height: 30%;
        }
        button {
            box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5), 0 2px 3px 0 rgba(0, 0, 0, 0.19);
            cursor: pointer;
            border: none;
            outline: none;
            width: 100px;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;   
            font-family: 'Oswald', sans-serif;
            @media (max-width: 767px) {
                width: 80px;
            }       
        }
        @media (max-width: 767px) {
            width: 100%;
            justify-content: space-around;
        } 
    `,
    typeSearch: css`
        clear: both;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5), 0 2px 3px 0 rgba(0, 0, 0, 0.19);
        border: none;
        background-color: white;
        outline: none;
        width: 70%;
        height: 40%;
        font-size: 15px;
     `,

}

export default Search;
