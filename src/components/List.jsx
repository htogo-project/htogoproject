import React, { useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import { css } from 'emotion'
import Add from './Add.jsx';


function List(props) {
    const [zoomImg, setzoomImg] = useState(styles.img)

    const Zoomer = () => {
        if(zoomImg === styles.img) {
            setzoomImg(styles.zoomImg)
        } else {
            setzoomImg(styles.img)
        }
    }



    return (
        <div className={styles.back}>
            <div className={styles.results}> Showing {props.restaurant.length} results in {props.value}</div>
            {props.restaurant.map((data, index) =>
                <div key={index} className={styles.contacts}>
                    <div className={styles.block}>
                        <div className={styles.info}>
                            <a href={data.Website} className={styles.title}>{data.Restaurant}</a>
                            <h4>{data.Type}</h4>
                            <h4> Address: <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </h4>
                            <h4> Phone: <a href={`tel:${data.Phone}`}>{data.Phone}</a></h4>
                            <h4>{data.Hours}</h4>
                            <h4 className={styles.Info}>{data.Info}</h4>
                            <h4> <a href={"https://forms.gle/TsG6WwsDsPBSnnp1A"}> Do you work here? Check Humboldt Virtual Tip Jar</a></h4>
                            <h4> <a href={"https://docs.google.com/spreadsheets/d/1-ynqqpXoYd9S5GWX-aiDYzqGJBienLGIEjWOIxu-pMY/edit?usp=sharing"}> Ordering food from here? Don't forget to tip </a></h4>
                        </div>
                        <div> <img  onClick={() => { props.setContact(true) }} className={zoomImg} src={`../${data.Image}`} /> </div>
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
        // max-width: 300px;
        // cursor: pointer;
    `,
    zoomImg: css`
        transform: scale(1.1);
        // position: absolute;
        // width: 100vw;
        // height: 100vh;
        // right: 0px;
        // left: 0px;
        cursor: pointer;
        overflow: hidden;

    `,
    info: css`
        width: auto;
    `
}

export default List;