import React, { useState } from 'react';
import { css } from 'emotion';
import list from "../Humboldttogo.json"




const Search = (props) => {
    const cities = ["Humboldt", "Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "Whitethorn", "Scotia", "Hydesville"]
    const [delivery, setDelivery] = useState(false)
    const [displayDelivery, setDisplayDelivery] = useState("None")
    const [city, setCity] = useState("Humboldt")
    const [key, setKey] = useState("")
    const [type, setType] = useState("")



    const [showlist, setShowlist] = useState(styles.dropdown_content)

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
                    console.log('00', type === "Restaurants", datas[0].Business === type, datas[0].Business)
                    

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
                console.log('1')
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
                console.log('2', type)
                if (type.length > 1) {
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Business === type) {
                            arr.push(datas[i])
                        }
                    }
                    props.setRestaurant(arr)
                } else {
                    console.log('28', type)
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
        console.log(event.target.textContent)
        event.preventDefault()
        const actualCity = event.target.textContent
        setCity(event.target.textContent)
        props.setValue(event.target.textContent)
        setShowlist(styles.dropdown_content)

        helper(list, actualCity, key, delivery, type)
    }


    let str = ""
    var getType = (e) => {
        str += e.currentTarget.value;
        setKey(str)
        helper(list, city, key, delivery, type)
    }

    const clicking = () => {
        if (showlist === styles.dropdown_content) {
            setShowlist(styles.dropdown_clicked)
        } else {
            setShowlist(styles.dropdown_content)
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
        let content = e.target.value
        setType(content)
        console.log(content, "hi")
        let arr = []
        for (var i = 0; i < list.length; i++) {
            if (list[i].Business === "Other") {
                arr.push(list[i])
            }
        }
        helper(arr, city, key, delivery, content)
    }

    const changeTypeRestaurant = (e) => {
        let content = e.target.value
        setType(content)
        console.log(content, "hi")

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
        <div className={styles.wrappOptions}>

            {/* <div className={styles.del}>
                <form>
                    <input className={styles.labelInput} onClick={isItDelivery} type="checkbox" name="delivery" value="Delivery" />
                    <label className={styles.label}> Delivery</label><br></br>
                </form>
            </div> */}
            <div className={styles.wrapper}>
                <div onClick={clicking} className={styles.dropdown}>
                    <button className={styles.dropbtn}>{city}</button>
                    <div className={showlist}>
                        {cities.map((city, index) =>
                            <a key={index} onClick={handleClick} href="">{city}</a>
                        )}
                    </div>

                </div>
                <input onChange={getType} className={styles.typeSearch} placeholder="Search type" />
            </div>

            <div className={styles.buttons_all_others_rest}>
                {/* <button className={styles.button} onClick={changeTypeAll}> All </button> */}
                {/* <button className={styles.button} onClick={changeTypeOther}> Other </button>
                <button className={styles.button} onClick={changeTypeRestaurant}> Restaurant </button> */}
                <div>
                    <input className={styles.button} onClick={changeTypeRestaurant} type="radio" name="option" value="Restaurants" />
                    <label for="Restaurants" className={styles.label}> Restaurants </label>
                </div>
                <div>
                    <input className={styles.button} onClick={changeTypeOther} type="radio" name="option" value="Other" />
                    <label for="Other" className={styles.label}> Other</label>
                </div>
                <div>
                    <input className={styles.button} onClick={isItDelivery} type="checkbox" name="option" value="Delivery" />
                    <label for="Delivery" className={styles.label}> Delivery</label>
                </div>
            </div>
            {/* <Delivery iscity={city} iskey={key} res={props.restaurant} setR={props.setRestaurant} del={delivery} setDel={setDelivery} /> */}
        </div>
    )
}


const styles = {
    delivery: css`
        display: none,
        font-family: Helvetica,Arial,sans-serif;
        color: black;
        font-weight: bold;
    `,
    wrappOptions: css`
        position: absolute;
        top: 0px;
        background-color: #FFFFFF;
        height: 100px;
        width: 310px;
        margin-top: 10px;
        margin-left: 100px;
        // border: 3px solid blue;
    `,
    buttons_all_others_rest: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    } @media (min-width: 1000px) {
        left: 20%;
    }
`, wrapper: css`
        display: flex;
        justify-content: space-between;
        // border: 3px solid pink;
        width:300px;
        div:button {
            height: 100%;
        }
      `,
    dropdown: css`
        display: inline-block;
        margin-left: 0px;
    `,
    dropbtn: css`
        border: 1px outset white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: auto;
        font-family: Georgia, serif;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        outline: none;
        padding: 12px 16px;
        height: 50px;
        width: 115px;
        `,
    dropdown_content: css`
      a {  
        font-family: Georgia, serif;
        font-size: 16px;
        margin: 8px;
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
            width: 115px;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            font-family: Georgia, serif;
            font-size: 16px;
            margin: 8px;
            background-color: #f9f9f9;
            z-index: 1;
        } a:hover {
            background-color: #f1f1f1;
        } 

        ,`,
    typeSearch: css`
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: none;
        background-color: white;
        outline: none;
        height: 50px; 
        font-size: 15px;
     `,
    deliveryCity: css`
        display: flex;
        flex-direction: column;
    `,
    label: css`
        font-family: Helvetica,Arial,sans-serif;
        color: black;
        font-weight: bold;
    `,
    del: css`
        margin-top: 10px;
        margin-left: 25%;
    `,
    button: css`
        border-color: #e7e7e7;
        background-color: white;
        color: black;
        cursor: pointer;
        width: auto;
        height: 30px;
        outline: none;
        &:hover{
        background: #e7e7e7;
        }
    `,


}

export default Search;
