import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { css } from 'emotion'
import Button from '../images/contact.png'




function Add(props) {

    const [btn, setBtn] = useState(styles.btn)


    const addHover = () => {
        if (btn == styles.btn) {
            setBtn(styles.btn_clicked)
        } else {
            setBtn(styles.btn)
        }
    }

    // const btnClicked = (e) => {
    //     e.preventDefault()
    //     if (!props.adc) {
    //         props.setAdc(true)
    //     } else {
    //         props.setAdc(false)
    //     }
    //     setBtn(styles.btn_clicked)
    // }

    const sendMeAnEmail = () => {
        if (!props.adc) {
            props.setAdc(true)
        } else {
            props.setAdc(false)
        }
    }

    return (
        <div>
            <input className={styles.donut} onPointerOver={addHover} type="image" src={Button} />
            <div className={btn} >
                <Link to="/contact">
                    <div onClick={() => { props.setAdc(true) }}> Contact
                    </div>
                </Link>
            </div>
        </div>
    )
}


const styles = {
    btn: css`
    font-family: Georgia, serif;
    font-size: 16px;
    margin: auto;
    position: absolute;
    display: none;
    margin-left: 10px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    a {
        margin-left: 1px;
        width: 80px;
        background-color: blacke;
        color: black;
        padding: 12px 10px;
        text-decoration: none;
        display: block;
    } a:hover {
        background-color: #f1f1f1;
    } 
        `,

    btn_clicked: css`
    font-family: Georgia, serif;
    font-size: 16px;
    margin: auto;
    position: absolute;
    display: block;
    margin-left: 10px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    a {
        margin-left: 1px;
        width: 80px;
        background-color: blacke;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    } a:hover {
        background-color: #f1f1f1;
    } 
    `,
    donut: css`
    outline: none;
    `,
}

export default Add;