import React, { useState } from 'react';
import { css } from 'emotion';
import Button from '../images/htgbutton.png'





function Search(props) {
    const [showlist, setShowlist] = useState(styles.dropdown_content)
    const cities = ["Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "DrWhitethorn"]
    const [btn, setBtn] = useState(styles.btn)
    const [city, setCity] = useState("Pick a city")

    const isItDelivery = () => {
        if (!props.del) {
            props.setDel(true);
        } else {
            props.setDel(false);
        }
    };

    const addHover = () => {
        if (btn == styles.btn) {
        setBtn(styles.btn_clicked)
        } else {
            setBtn(styles.btn)
        }
    }

    const btnClicked = (e) => {
        e.preventDefault()
        if (!props.adc) {
            props.setAdc(true)
        } else {
            props.setAdc(false)
        }
        setBtn(styles.btn_clicked)
    }

    const handleClick = (event) => {
        event.preventDefault()
        setCity(event.target.textContent)
        props.setValue(event.target.textContent)
        setShowlist(styles.dropdown_clicked)

    }

    const onHover = () => {
        setShowlist(styles.dropdown_content)
    }

    // const sendMeAnEmail = () => {
    //     if (!props.adc) {
    //         props.setAdc(true)
    //     } else {
    //         props.setAdc(false)
    //     }
    // }

    return (
        <div className={styles.wrappermaster}>
            <div className={styles.wrapper}>
                <div className={styles.dropdown}>
                    <button onPointerOver={onHover} className={styles.dropbtn}>{city}</button>
                    <div className={showlist}>
                        <a onClick={handleClick} href="#">Arcata</a>
                        <a onClick={handleClick} href="#">Carlotta</a>
                        <a onClick={handleClick} href="#">Eureka</a>
                        <a onClick={handleClick} href="">Ferndale</a>
                        <a onClick={handleClick} href="">Fortuna</a>
                        <a onClick={handleClick} href="">Mckinleyville</a>
                        <a onClick={handleClick} href="">Redway</a>
                        <a onClick={handleClick} href="">Rio Dell</a>
                        <a onClick={handleClick} href="">Trinidad</a>
                        <a onClick={handleClick} href="">Whitethorn</a>
                        <a onClick={handleClick} href="">All</a>
                    </div>
                </div>
                <form action="/action_page.php">
                    <input  className={styles.labelInput} onClick={isItDelivery} type="checkbox" name="delivery" value="Delivery" />
                    <label className={styles.label}> Delivery</label><br></br>
                </form>
                <div>
                    <input className={styles.donut} onPointerOver={addHover} type="image" src={Button} />
                    <div className={btn} >
                        <a onClick={btnClicked} href="">Add</a>
                    </div>

                </div>
            </div>
        </div>
    )
}


const styles = {
    dropdown: css`
        // position: relative;
        display: inline-block;
        width: 70px;
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
    border-radius: 30%;
    font-family: Georgia, serif;
    font-size: 16px;
        position: relative;
        cursor: pointer;
        outline: none;
        margin-left:2px;
        border: 2px solid grey;
        height: 50px; 
        width: 120px;
        background-color:white;
   `,
    dropdown_content: css`
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
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        } a:hover {
            background-color: #f1f1f1;
        } 
    `,
    dropdown_clicked: css`
     a { display:none;
     }`,

    wrapper: css`
        background-color: #8B4513
        ;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (min-width: 1300px) {
            width: 60%;
         
        }`,
    wrappermaster: css`
    background-color: #8B4513;
    `,
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
    label: css`
        font-family: Georgia, serif;
        color: white;
        font-weight: bold;
        margin-left: 1px;
     `,
     labelInput : css`
     margin-left: 60px;
    //  position:absolute;
    //  left: 50%;
     `
}

export default Search;