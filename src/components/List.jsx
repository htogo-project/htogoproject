import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion'
import Add from './Add.jsx';


function List(props) {

    return (
        <div className={styles.back}>
            <span className={styles.results}> Showing {props.restaurant.length} results in {props.value}</span>
            {props.restaurant.map((data, index) =>
                <div key={index} className={styles.contacts}>
                    <div className={styles.block}>
                        <div className={styles.info}>
                            <a href={data.Website} className={styles.title}>{data.Name}</a>
                            <h4>{data.Type}</h4>
                            <h4> Address: <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </h4>
                            <h4> Phone: <a href={`tel:${data.Phone}`}>{data.Phone}</a></h4>
                            <h4 className={styles.Info}>{data.Info}</h4>
                            <h4> <a href={"https://forms.gle/TsG6WwsDsPBSnnp1A"}> Do you work here? Check Humboldt Virtual Tip Jar</a></h4>
                            <h4> <a href={"https://docs.google.com/spreadsheets/d/1-ynqqpXoYd9S5GWX-aiDYzqGJBienLGIEjWOIxu-pMY/edit?usp=sharing"}> Ordering food from here? Don't forget to tip </a></h4>
                        </div>
                        <div className={styles.hours}>
                            <h4 className={styles.today}> Today, {data.Hours[new Date().getDay()]}</h4>
                            <ul>
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
    )

}


const styles = {
    block: css`
        display: flex;
        justify-content: space-between;
        border: 3px outset #F0FFF0;
        margin-top: 20px;
        padding: 10px;
        background-color: white;    
        flex-wrap: wrap;    
    `,
    back: css`
    overflow: hidden;
        display: block;
        padding-left: 10%;
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
    `,
    img: css`
        height: auto;
        width: 100%;
        cursor: pointer;
    `,
    info: css`
        width: auto;
    `,
    hours: css`
        font-size: 14px;
    `,
    today: css`
        color: green;
    `
}

export default List;