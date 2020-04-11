import React, { useState } from 'react';
import { css } from 'emotion'
import Add from './Add.jsx';


function List(props) {
    return (
        <div className={styles.back}>
            <div className={styles.results}> Showing {props.restaurant.length} results in {props.value}</div>
            {props.restaurant.map((data, index) =>
                <div key={index} className={styles.contacts}>
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
            <Add contact={props.contact} setContact={props.setContact}/>
        </div>
    )

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
        margin-top: 20px;
        // margin: auto;
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
        margin-bottom: 5%;
        padding-top: 10px;
        color: white;
        font-size: 24px;
        font-weight: bold;
        font-family: Helvetica,Arial,sans-serif;
    `
}

export default List;