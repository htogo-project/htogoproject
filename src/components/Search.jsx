import React, { useState } from 'react';
import Add from './Add'
import { css } from 'emotion';
import datas from "../Humboldttogo.json"




const Search = (props) => {
    const [showlist, setShowlist] = useState(styles.dropdown_content)
    const cities = ["Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "DrWhitethorn"]
    const [city, setCity] = useState("city")

 

    const handleClick = (event) => {
        event.preventDefault()
        setCity(event.target.textContent)
        props.setValue(event.target.textContent)
        setShowlist(styles.dropdown_content)

    }

    const getType = (e) => {
        let arr = [];
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].Keywords.includes(e.currentTarget.value)) {
                arr.push(datas[i])
            }
        }
        props.setUserType(arr)
    }

    const clicking = () => {
        if (showlist === styles.dropdown_content) {
            setShowlist(styles.dropdown_clicked)
        } else {
            setShowlist(styles.dropdown_content)

        }
    }

    return (
        <div className={styles.wrappermaster}>
            <div className={styles.wrapper}>
                    {/* <form action="/action_page.php">
                        <input className={styles.labelInput} onClick={isItDelivery} type="checkbox" name="delivery" value="Delivery" />
                        <label className={styles.label}> Delivery</label><br></br>
                    </form> */}
                    <div className={styles.dropdown}>
                        <button onClick={clicking} className={styles.dropbtn}>{city}</button>
                        <div className={showlist}>
                            <a onClick={handleClick} href="">Arcata</a>
                            <a onClick={handleClick} href="">Carlotta</a>
                            <a onClick={handleClick} href="">Eureka</a>
                            <a onClick={handleClick} href="">Ferndale</a>
                            <a onClick={handleClick} href="">Fortuna</a>
                            <a onClick={handleClick} href="">Mckinleyville</a>
                            <a onClick={handleClick} href="">Redway</a>
                            <a onClick={handleClick} href="">Orick</a>
                            <a onClick={handleClick} href="">Rio Dell</a>
                            <a onClick={handleClick} href="">Trinidad</a>
                            <a onClick={handleClick} href="">Whitethorn</a>
                            <a onClick={handleClick} href="">All</a>
                        </div>
                    </div>
                <input onChange={getType} className={styles.typeSearch} placeholder="Search by type, ..." />
                {/* <div>
                    <Add adc={props.adc} setAdc={props.setAdc} />
                </div> */}
            </div>
        </div>
    )
}


const styles = {
    wrappermaster: css`
        background-color: #FFFFFF;
    `,
    wrapper: css`
        display: flex;
        justify-content: space-between;
        width:300px ;
        margin-left: 10%;
        div:button {
            height: 100%;
        }
      `,
    dropdown: css`
        display: inline-block;
        width: 70px;
    `,
    dropbtn: css`
        border: 1px outset white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: auto;
        font-family: Georgia, serif;
        font-size: 16px;
        cursor: pointer;
        outline: none;
        height: 100%; 
        width: 155%;
   `,
    dropdown_content: css`
      a {  
        font-family: Georgia, serif;
        font-size: 16px;
        margin: auto;
        display: none;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
    `,
    dropdown_clicked: css`
        position: absolute;
        background-color: #f9f9f9;
        display:block;
        a {
            margin-left: 1px;
            width: 80px;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            font-family: Georgia, serif;
            font-size: 16px;
            margin: auto;
            background-color: #f9f9f9;
            z-index: 1;
        } a:hover {
            background-color: #f1f1f1;
        } 

        ,`,
    typeSearch: css`
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: none;
        padding-left: 10px;
        background-color: white;
        outline: none;
        width: 60%;
        height: 60px; 
        font-size: 18px;
 
     `,

    labelInput: css`
    //  margin-left: 40px;
    //  position:absolute;
    //  left: 50%;
     `,
    deliveryCity: css`
    display: flex;
    flex-direction: column;
     `,

}

export default Search;
