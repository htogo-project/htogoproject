import React, { useState } from 'react';
import { css } from 'emotion';
import list from "../Humboldttogo.json"




const Search = (props) => {
    const cities = ["All", "Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "Whitethorn", "Scotia", "Hydesville"]
    const [delivery, setDelivery] = useState(false)
    const [city, setCity] = useState("city")
    const [key, setKey] = useState("")
    const [type, setType] = useState("")



    const [showlist, setShowlist] = useState(styles.dropdown_content)

    const helper = (datas, city, key, delivery, type) => {


        let arr = [];

        if (city !== 'All' && city !== 'city') {
            if (delivery) {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].City === city && datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                        arr.push(datas[i])
                    }
                }
                props.setRestaurant(arr)
                // setDelivery(false)
            } else if (!delivery) {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].City === city && datas[i].Keywords.toLowerCase().includes(key.toLowerCase())) {
                        arr.push(datas[i])
                    }
                }
                props.setRestaurant(arr)
                // setDelivery(true)
            }
        } else if (city === 'All' || city === 'city') {
            if (delivery) {
                console.log('1')
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                        arr.push(datas[i])
                    }
                }
                props.setRestaurant(arr)
                // setDelivery(false)
            } else if (!delivery) {
                console.log('2')

                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Keywords.toLowerCase().includes(key.toLowerCase())) {
                        arr.push(datas[i])
                    }
                }
                props.setRestaurant(arr)
                // setDelivery(true)
            }
        }
    }


    const handleClick = (event) => {
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
        let content = e.target.textContent
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
        let content = e.target.textContent
        setType(content)

        let arr = []
        for (var i = 0; i < list.length; i++) {
            if (list[i].Business === "Restaurant") {
                arr.push(list[i])
            }
        }
        helper(arr, city, key, delivery, content)
    }

    const changeTypeAll = () => {
        helper(list, city, key, delivery, type)
    }


    return (
        <div className={styles.wrappermaster}>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={changeTypeAll}> All </button>
                <button className={styles.button} onClick={changeTypeOther}> Other </button>
                <button className={styles.button} onClick={changeTypeRestaurant}> Restaurant </button>
            </div>
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
            <div className={styles.del}>
                <form>
                    <input className={styles.labelInput} onClick={isItDelivery} type="checkbox" name="delivery" value="Delivery" />
                    <label className={styles.label}> Delivery</label><br></br>
                </form>
            </div>
            {/* <Delivery iscity={city} iskey={key} res={props.restaurant} setR={props.setRestaurant} del={delivery} setDel={setDelivery} /> */}
        </div>
    )
}


const styles = {
    wrappermaster: css`
        overflow: hidden;
        background-color: #FFFFFF;
        height: 100px;
    `,
    wrapper: css`
        display: flex;
        justify-content: space-between;
        width:250px ;
        margin-left: 20%;
        div:button {
            height: 100%;
        }
      `,
    dropdown: css`
        display: inline-block;
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
        height: 100%; 
        width: 100%;
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
            width: 80px;
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
        padding-left: 5px;
        background-color: white;
        outline: none;
        margin: auto;
        width: 60%;
        height: 60px; 
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
    buttons: css`
        position: absolute;
        width: 200px;
        top: 20px;
        left: 33% ;
        display: flex;
        justify-content: space-between;
    } @media (min-width: 1000px) {
        left: 20%;
    }
`,

}

export default Search;
