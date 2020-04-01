import React, { useState } from 'react';
import { css } from 'emotion';




function Search(props) {
    const cities = ["Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "DrWhitethorn"]
    const [city, setCity] = useState("Pick a city")

    const isItDelivery = () => {
        if (!props.del) {
            props.setDel(true);
        } else {
            props.setDel(false);
        }
    };

    const handleClick = (event) => {
        setCity(event.target.textContent)
        props.setValue(event.target.textContent)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>{city}</button>
                <div className={styles.dropdown_content}>
                    <a onClick={handleClick} href="#">Arcata</a>
                    <a onClick={handleClick} href="#">Carlotta</a>
                    <a onClick={handleClick} href="#">Whitethorn</a>
                    <a onClick={handleClick} href="#">Eureka</a>
                    <a onClick={handleClick} href="#">Ferndale</a>
                    <a onClick={handleClick} href="#">Fortuna</a>
                    <a onClick={handleClick} href="#">Mckinleyville</a>
                    <a onClick={handleClick} href="#">Rio Dell</a>
                    <a onClick={handleClick} href="#">Trinidad</a>
                </div>
            </div>
            <form action="/action_page.php">
                <input onClick={isItDelivery} type="checkbox" name="delivery" value="Delivery" />
                <label> Delivery Options</label><br></br>
            </form>
        </div>
    )
}


const styles = {
    dropdown: css`
        // position: relative;
        display: inline-block;
        width: 100px;
        &:hover {
            div {
            display: block;
        }&:after {
            div {
                display: none;
            }
        }
    `,
    dropbtn: css`
        position: relative;
        cursor: pointer;
        outline: none;
        // margin-left:90%;
        border: 2px solid grey;
        height: 50px; 
        width: 160px;
   `,
    dropdown_content: css`
        margin: auto;
        position: absolute;
        display: none;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        } a:hover {
            background-color: #f1f1f1;
        } &:after {
            display: none;
        }
    `,
    wrapper: css`
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `,
}

export default Search;