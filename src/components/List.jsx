import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion'
import Add from './Add.jsx';


function List(props) {

    return (
        <div>
            <span className={styles.results}> Showing {props.restaurant.length} results in {props.value}</span>
            <div className={styles.background}>
                {props.restaurant.map((data, index) =>
                    <div key={index} className={styles.contacts}>
                        <div className={styles.info_block}>
                            <div>
                                <a className={styles.restaurant_title} href={data.Website} >{data.Name}</a>
                                <h4 className={styles.restaurant_type}>{data.Type}</h4>
                                <div className={styles.restaurant_info}>
                                    <div> <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </div>
                                    <div> <a href={`tel:${data.Phone}`}>{data.Phone}</a></div>
                                    <div>{data.Info}</div>
                                    <div> <a href={"https://forms.gle/TsG6WwsDsPBSnnp1A"}> Do you work here? Check Humboldt Virtual Tip Jar</a></div>
                                    <div> <a href={"https://docs.google.com/spreadsheets/d/1-ynqqpXoYd9S5GWX-aiDYzqGJBienLGIEjWOIxu-pMY/edit?usp=sharing"}> Ordering food from here? Don't forget to tip </a></div>
                                </div>
                            </div>
                            <div className={styles.timebox}>
                                <div className={styles.today}> {data.Hours[new Date().getDay()]}</div>
                                <ul className={styles.hours}>
                                    <li>{data.Hours["0"]}</li>
                                    <li>{data.Hours["1"]}</li>
                                    <li>{data.Hours["2"]}</li>
                                    <li>{data.Hours["3"]}</li>
                                    <li>{data.Hours["4"]}</li>
                                    <li>{data.Hours["5"]}</li>
                                    <li>{data.Hours["6"]}</li>
                                </ul>
                            </div>
                            <Link to={`/${data.Restaurant}`}>
                                <div> <img onClick={() => { props.setContact(true) }} className={styles.img} src={`../${data.Image}`} /> </div>
                            </Link>

                        </div>
                    </div>
                )}
                <Add contact={props.contact} setContact={props.setContact} />

            </div>
        </div>

    )

}


const styles = {
    results: css`
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        justify-content: left;
        align-items: left;
        margin-left: 10%;
        // border: 3px solid blue;
        color: #322a2a;
        font-size: 24px;
        font-weight: bold;
        font-family: Helvetica,Arial,sans-serif;
    `,
    background: css`
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // border: 3px solid red;
    `,
    info_block: css`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 70%;
        border: 3px outset #F0FFF0;
        margin-top: 20px;
        padding: 10px;
        background-color: white;    
        font-weight: bold;
        font-size: 11px;
    `,
    restaurant_title: css`
        color: #778899;
        font-weight: bold;
        font-size: 17px;
    `,
    restaurant_type: css`
        color: #778899;
        font-weight: bold;
        font-size: 16px;
    `,
    restaurant_info: css`
        color: #778899;
        font-weight: bold;
        line-height: 25px;
        font-size: 14px;
    `,

    contacts: css`
        width: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

    `,
    keywords: css`
        display: none;
    `,

    img: css`
        height: auto;
        width: 100%;
        cursor: pointer;
    `,
    timebox: css`
        // border: 3px solid blue;
    `,
    today: css`
        color: green;
        font-size: 13px;
        text-align: left;
    `,
    hours: css`
        list-style-type: none;
        padding-left: 0px;
        font-size: 13px;
        text-align: left;
    `

}

export default List;