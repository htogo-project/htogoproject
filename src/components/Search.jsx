import React, { useState, useEffect } from 'react';
import { css } from 'emotion';


import list from "../Humboldttogo.json"

const Search = (props) => {
    const cities = ["Humboldt", "Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "Whitethorn", "Scotia", "Hydesville"];

    const [delivery, setDelivery] = useState(false);
    const [keyword, setKeyword] = useState("");

    //setting placeholder according with type of business
    const [options, setOptions] = useState("Search type")


    const setList = (city, key, type, delivery) => {
        if (type === "Other") {
            setOptions("pet shop, flowers, books...")
        } else if (type === "Restaurants") {
            setOptions("tacos, sushi, icecream...")
        }
        const filterCity = city !== "Humboldt" ? list.filter(el => el.City === props.currentCity) : list;
        const filtered = delivery ? filterCity.filter(el => el.Info.includes("Delivery")) : filterCity;
        const filterKey = key.length > 0 ? filtered.filter(el => el.Keywords.toLowerCase().includes(key)) : filtered;
        const filterType = type.length > 0 ? filterKey.filter(el => el.Business === type) : filterKey;

        return filterType;
    }

    useEffect(() => {
        props.setList(setList(props.currentCity, keyword, props.business, delivery));
    }, [props.currentCity, keyword, props.business, delivery]);



    let str = ""
    var getKeyword = (e) => {
        str += e.currentTarget.value;
        setKeyword(str)
    }

    return (
        <div className={styles.search_wrapper}>
            <input onChange={getKeyword} className={styles.typeSearch} placeholder={options} />
            <select className={styles.dropdown} onChange={(e) => props.setCurrentCity(e.target.value)}>
                <option value="">City</option>
                {cities.map((city, index) =>
                    <option key={index} value={city}>{city}</option>
                )}
            </select>
            <div className={styles.filter_options}>
                <span onClick={() => props.setBusiness("Restaurants")}>Restaurants</span>
                <span onClick={() => props.setBusiness("Other")}>Other</span>
                <span onClick={() => delivery ? setDelivery(false) : setDelivery(true)}>Delivery</span>
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
        align-items: flex-start;
        flex-wrap: wrap;
        width: 70%;
        height: 100%;
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
        // background-color: white;
        width: 60%;
        height: 30%;
        span {
            box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5), 0 2px 3px 0 rgba(0, 0, 0, 0.19);
            cursor: pointer;
            width: 100px;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;   
            @media (max-width: 767px) {
                // height: 40px;
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
        // height: 50px; 
        font-size: 15px;
     `,

}

export default Search;
