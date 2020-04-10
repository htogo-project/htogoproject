import React, { useState } from 'react';
import { css } from 'emotion'
import datas from "../Humboldttogo.json"
import Delivery from './Delivery.jsx';


function List(props) {

    const [delivery, setDelivery] = useState(false)



    let arr = [];
    if (props.value.length > 0 && props.value !== "All" && !delivery) {
        for (var i = 0; i < props.usertype.length; i++) {
            if (props.usertype[i].City === props.value) {
                arr.push(props.usertype[i])
            }
        }
        if (arr.length === 0) {
            return (
                <div className={styles.back}>
                    <div className={styles.contacts}>
                        <h3 className={styles.results}> No results yet =(</h3>
                    </div>
                </div>
            )
        }
        return (
            <div className={styles.back}>
                <div className={styles.results}> Showing {arr.length} results in {props.value}</div>
                <Delivery del={delivery} setDel={setDelivery} />                {arr.map((data) =>
                    <div key={data.Index.toString()} className={styles.contacts}>
                        <div className={styles.block}>
                            <a href={data.Website} className={styles.title}>{data.Restaurant}</a>
                            <h4>{data.Type}</h4>
                            <h4> Address: <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </h4>
                            <h4> Phone: <a href={`tel:${data.Phone}`}>{data.Phone}</a></h4>
                            <h4>{data.Info}</h4>
                            <h4> <a href={"https://forms.gle/TsG6WwsDsPBSnnp1A"}> Do you work here? Check Humboldt Virtual Tip Jar</a></h4>
                            <h4> <a href={"https://docs.google.com/spreadsheets/d/1-ynqqpXoYd9S5GWX-aiDYzqGJBienLGIEjWOIxu-pMY/edit?usp=sharing"}> Ordering food from here? Don't forget to tip </a></h4>
                        </div>
                    </div>
                )}
            </div>
        )
    } if (props.value.length === 0 && delivery) {
        for (var i = 0; i < props.usertype.length; i++) {
            if (datas[i].Info.includes("Delivery")) {
                arr.push(datas[i])
            }
        } if (arr.length === 0) {
            return (
                <div className={styles.back}>
                    <div className={styles.contacts}>
                        <h3 className={styles.results}> No results yet =(</h3>
                    </div>
                </div>
            )
        } return (
            <div className={styles.back}>
                <div className={styles.results}> Showing {arr.length} results in {props.value}</div>
                <Delivery del={delivery} setDel={setDelivery} />
                {arr.map((data) =>
                    <div key={data.Index.toString()} className={styles.contacts}>
                        <div className={styles.block}>
                            <a href={data.Website} className={styles.title}>{data.Restaurant}</a>
                            <h4>{data.Type}</h4>
                            <h4> Address: <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </h4>
                            <h4> Phone: <a href={`tel:${data.Phone}`}>{data.Phone}</a></h4>
                            <h4>{data.Info}</h4>
                            <h4> <a href={"https://forms.gle/TsG6WwsDsPBSnnp1A"}> Do you work here? Check Humboldt Virtual Tip Jar</a></h4>
                            <h4> <a href={"https://docs.google.com/spreadsheets/d/1-ynqqpXoYd9S5GWX-aiDYzqGJBienLGIEjWOIxu-pMY/edit?usp=sharing"}> Ordering food from here? Don't forget to tip </a></h4>
                        </div>
                    </div>
                )}
            </div>
        )
    } if (props.value.length > 0 && props.value !== "All" && delivery) {
        for (var i = 0; i < props.usertype.length; i++) {
            if (datas[i].City === props.value && datas[i].Info.includes("Delivery")) {
                arr.push(datas[i])
            }
        }
        if (arr.length === 0) {
            return (
                <div className={styles.back}>
                    <div className={styles.contacts}>
                        <h3 className={styles.results}> No results yet =(</h3>
                    </div>
                </div>
            )
        }

        return (
            <div className={styles.back}>
                <div className={styles.results}> Showing {arr.length} results in {props.value}</div>
                <Delivery del={delivery} setDel={setDelivery} />
                {arr.map((data) =>
                    <div key={data.Index.toString()} className={styles.contacts}>
                        <div className={styles.block}>
                            <a href={data.Website} className={styles.title}>{data.Restaurant}</a>
                            <h4>{data.Type}</h4>
                            <h4> Address: <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </h4>
                            <h4> Phone: <a href={`tel:${data.Phone}`}>{data.Phone}</a></h4>
                            <h4>{data.Info}</h4>
                            <h4> <a href={"https://forms.gle/TsG6WwsDsPBSnnp1A"}> Do you work here? Check Humboldt Virtual Tip Jar</a></h4>
                            <h4> <a href={"https://docs.google.com/spreadsheets/d/1-ynqqpXoYd9S5GWX-aiDYzqGJBienLGIEjWOIxu-pMY/edit?usp=sharing"}> Ordering food from here? Don't forget to tip </a></h4>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    else {
        return (
            <div className={styles.back}>
                <div className={styles.results}> Showing {props.usertype.length} results in Humboldt</div>
                <Delivery del={delivery} setDel={setDelivery} />
                {props.usertype.map((data) =>
                    <div key={data.Index.toString()} className={styles.contacts}>
                        <div className={styles.block}>
                            <a href={data.Website} className={styles.title}>{data.Restaurant}</a>
                            <h4>{data.Type}</h4>
                            <h4> Address: <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </h4>
                            <h4> Phone: <a href={`tel:${data.Phone}`}>{data.Phone}</a></h4>
                            <h4>{data.Info}</h4>
                            <h4> <a href={"https://forms.gle/TsG6WwsDsPBSnnp1A"}> Do you work here? Check Humboldt Virtual Tip Jar</a></h4>
                            <h4> <a href={"https://docs.google.com/spreadsheets/d/1-ynqqpXoYd9S5GWX-aiDYzqGJBienLGIEjWOIxu-pMY/edit?usp=sharing"}> Ordering food from here? Don't forget to tip </a></h4>
                        </div>
                    </div>
                )}
            </div>
        )

    }
}


const styles = {
    wrapper: css`
        display:flex;
        justify-content: center;
        width: 100%;
    `,
    header: css`
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        width: 60%;
    `,
    restaurant: css`
        background-color: white;
        color: black;
        td {
        white-space: wrap;
        padding-bottom: 600px;
        }
    `,
    phone: css`
        width:100px;
    `,
    block: css`
        border: 3px outset #F0FFF0;
        // margin-top: 25px;
        margin: auto;
        // margin-left: 10px;
        padding: 10px;
        background-color: white;        
    `,
    back: css`
        display: block;
        // flex-wrap: wrap;
        padding-left: 10%;
        // flex-direction: column;
        // align-items: center;
        // justify-content: space-around;
        background-color: #2F4F4F;
    `,
    title: css`
            color: #778899;
            font-weight: bold;
            font-size: 17px;
            `,
    contacts: css`
         width: 80%;

    `,
    results: css`
        color: white;
        margin-left: 30%;
    `,
    keywords: css`
        display: none;
    `,
    results: css`
        margin-bottom: 10%;
        padding-top: 10px;
        color: white;
        font-size: 24px;
        margin-left: 30px;
        font-weight: bold;
        font-family: Helvetica,Arial,sans-serif;
    `
}

export default List;