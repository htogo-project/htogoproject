import React, { useState } from 'react';
import datas from "../Humboldttogo.json"
import { css } from 'emotion'






const Delivery = (props) => {

    const isItDelivery = () => {
        let arr = []
        if (!props.del) {
            if (props.iskey.length > 0 && props.iscity !== "city" && props.iscity !== "All") {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].City === props.iscity && datas[i].Keywords.toLowerCase().includes(props.iskey.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                        arr.push(datas[i])
                    }
                }
                props.setR(arr)
            } else if (props.iskey.length > 0 && props.iscity === "city") {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Keywords.toLowerCase().includes(props.iskey.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                        arr.push(datas[i])
                    }
                }
                props.setR(arr)
            } else if (props.iskey.length === 0 && props.iscity === "city") {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Info.includes("Delivery")) {
                        arr.push(datas[i])
                    }
                }
                props.setR(arr)

            } else if (props.iskey.length > 0 && props.iscity === "All") {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Keywords.toLowerCase().includes(props.iskey.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                        arr.push(datas[i])
                    }
                }
                props.setR(arr)
            } else if (props.iskey.length === 0 && props.iscity === "All") {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Info.includes("Delivery")) {
                        arr.push(datas[i])
                    }
                }
                props.setR(arr)
            } else if (props.iskey.length === 0 && props.iscity !== "city") {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Info.includes("Delivery") && datas[i].City === props.iscity) {
                        arr.push(datas[i])
                    }
                }
                props.setR(arr)
            } else if (props.iskey.length === 0 && props.iscity !== "All") {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Info.includes("Delivery") && datas[i].City === props.iscity) {
                        arr.push(datas[i])
                    }
                }
                props.setR(arr)
            }
            props.setR(arr);
            props.setDel(true);
        } else {
            if (props.iskey.length > 0 && props.iscity !== "city" && props.iscity !== "All") {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].City === props.iscity && datas[i].Keywords.toLowerCase().includes(props.iskey.toLowerCase()) && !datas[i].Info.includes("Delivery")) {
                        arr.push(datas[i])
                    }
                }
                props.setR(arr)
            } if (props.iskey.length === 0 && props.iscity !== "city" && props.iscity !== "All") {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].City === props.iscity) {
                        arr.push(datas[i])
                    }
                }
                props.setR(arr)
            } else if (props.iskey.length > 0 && props.iscity === "city") {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Keywords.toLowerCase().includes(props.iskey.toLowerCase())) {
                        arr.push(datas[i])
                    }
                }
                props.setR(arr)

            } else if (props.iskey.length === 0 && props.iscity === "city") {
    
                props.setR(datas)

            } else if (props.iskey.length > 0 && props.iscity === "All") {
            for (var i = 0; i < datas.length; i++) {
                if (datas[i].Keywords.toLowerCase().includes(props.iskey.toLowerCase())) {
                    arr.push(datas[i])
                }
            }
            props.setR(arr)
        } else if (props.iskey.length === 0 && props.iscity === "All") {
            props.setR(datas)
        }
            props.setDel(false);
        }
    }



    return (
        <div className={styles.del}>
            <form action="/action_page.php">
                <input className={styles.labelInput} onClick={isItDelivery} type="checkbox" name="delivery" value="Delivery" />
                <label className={styles.label}> Delivery</label><br></br>
            </form>
        </div>
    )
}


const styles = {
    label: css`
        font-family: Helvetica,Arial,sans-serif;
        color: black;
        font-weight: bold;
     `,
    del: css`
        margin-top: 10px;
        margin-left: 25%;
    `
}

export default Delivery;