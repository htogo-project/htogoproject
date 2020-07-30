import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion'
import Add from './Add.jsx';


const List = (props) => {

    return (
        <div>
            <span className={styles.showing_x_results}> Showing {props.restaurant.length} {props.business} in {props.value}</span>
            <div className={styles.background}>
                {props.restaurant.map((data, index) =>
                    <div key={index} className={styles.contacts}>
                        <div className={styles.div_img}>
                            <Link to={`/${data.Restaurant}`}>
                                <div> <img onClick={() => { props.setContact(true) }} className={styles.img} src={`../${data.Image}`} /> </div>
                            </Link>
                        </div>
                        <div className={styles.title_type}>
                            <a className={styles.restaurant_title} href={data.Website} >{data.Name}</a>
                            <h4 className={styles.restaurant_type}>{data.Type}</h4>
                            <div className={styles.restaurant_info}>{data.Info}</div>
                            <div className={styles.today}> {data.Hours[new Date().getDay()]}</div> 
                            <div> <a className={styles.phone_and_address} href={`tel:${data.Phone}`}>{data.Phone}</a></div>
                            <div> <a className={styles.phone_and_address} href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </div>
                        </div>

                        {/* <div className={styles.contact}>
                            <div> <a className={styles.phone_and_address} href={`tel:${data.Phone}`}>{data.Phone}</a></div>
                            <div> <a className={styles.phone_and_address} href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </div>
                        </div>
                        <div className={styles.timebox}>
                                <div className={styles.today}> {data.Hours[new Date().getDay()]}</div>  */}
                            {/* <ul className={styles.hours}>
                                <li>{data.Hours["0"]}</li>
                                <li>{data.Hours["1"]}</li>
                                <li>{data.Hours["2"]}</li>
                                <li>{data.Hours["3"]}</li>
                                <li>{data.Hours["4"]}</li>
                                <li>{data.Hours["5"]}</li>
                                <li>{data.Hours["6"]}</li>
                            </ul> */}
                        </div>
                    // </div>
                )}
                <Add contact={props.contact} setContact={props.setContact} />
            </div>
        </div>

    )

}


const styles = {
    showing_x_results: css`
        margin-top: 100px;
        color: #322a2a;
        font-weight: bold;
        font-size: 24px;
        @media (max-width: 450px) {
            font-size: 16px;
            margin-left: 20px
        }
        @media (max-width: 280px) {
            font-size: 12px;
            margin-left: 40px
        }
        @media (max-width: 320px) {
            font-size: 14px;
            margin-left: 20px
        }
    `,
    background: css`
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        width: 400px;
        // border: 3px solid green;
        @media (max-width: 816px) {
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: left;
            margin-left:0;
        }
        @media (max-width: 450px) {
            width: 80vw;
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: left;
            margin-left:0;
        }
        @media (width: 280px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: left;
            margin-left:0;
        }
    `,
    contacts: css`
        display: flex;
        // width: 60vw;
        width: 100%;
        margin-left: 0px;
        justify-content: space-between;
        // border: 3px solid yellow;
        margin-top: 30px;
        @media (max-width: 816px) {
            width: 400px;
            margin-left: 0px;
        }
        @media (max-width: 450px) {
            width: 88vw;
            margin-left: 0px;
        }
        @media (max-width: 280px) {
            width: 95%;
            margin-left: 20px;
        }
    `,
    title_type: css`
        // border: 3px solid purple;
        width: 280px;
        padding-left: 20px;
        margin: 0;
        @media (max-width: 280px) {
            width: 60%;
            padding-left: 5px;
        }
    `,
    img: css`
        width: 150px;
        height: 150px;
        @media (max-width: 280px) {
            width: 100px;
            height: 100px;
            margin-left: 0px;
        }
    `,
    div_img: css` 
        width: auto;
        height: 100%;
        @media (max-width: 280px) {
            width: 100px;
            height: 100px;
            margin-left: 0px;
        }

    `,
    restaurant_title: css`
        color: #322a2a;
        font-weight: bold;
        font-size: 20px;
        @media (max-width: 816px) {
            font-size: 16px;
         }
    `,
    restaurant_type: css`
        color: #a4a4a4;
        font-size: 12px;
        font-weight: bold;
    `,
    restaurant_info: css`
        color: #a4a4a4;
        font-size: 12px;
        font-weight: bold;
    `,
    keywords: css`
        display: none;
    `,
    timebox: css`
        text-align: justify;
        text-justify: inter-word; 
        width: 200px;
        // border: 3px solid pink;
        margin: 0;
        padding: 0;
        // @media (max-width: 1000px) {
        //     margin-left: 30px;
        //  }
     
        `,
    today: css`
        color: #008037;
        text-align: justify;
        font-size: 12px;
        margin: 0;
        padding: 0;
        // @media (max-width: 1200px) {
        //     margin-left: 30px;
        //  }
    `,
 
    hours: css`
        li { 
            text-align: left;
            text-justify: inter-word;list-style-type: none;
            margin: 0;
            padding: 0;
            z-index: 1;
        }
        margin: 0;
        padding: 0;
        font-size: 9px;
        // @media (max-width: 1200px) {
        //     margin-left: 30px;
        //  }
    `,
    phone_and_address: css`
        color: #322a2a;
        font-size: 14px;
    `,
    contact: css`
        width: 120px;
        // border: 3px solid brown;
        // @media (max-width: 1200px) {
        //     margin-left: 30px;
        //  }
    `,

}

export default List;