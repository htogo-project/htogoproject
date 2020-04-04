import React from 'react';
import { css } from 'emotion'
import datas from "../Humboldttogo.json"


function List(props) {
    let arr = [];
    if (props.value.length > 0 && props.value !== "All" && !props.del) {
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].City === props.value) {
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
                {arr.map((data) =>
                    <div key={data.Index.toString()} className={styles.contacts}>
                        <div className={styles.block}>
                            <a href={data.Website} className={styles.title}>{data.Restaurant}</a>
                            <h4>{data.Type}</h4>
                            <h4> Address: <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </h4>
                            <h4> Phone: <a href={`tel:${data.Phone}`}>{data.Phone}</a></h4>
                            <h4>{data.Info}</h4>
                        </div>
                    </div>
                )}
            </div>
        )
    } if (props.value.length === 0 && props.del) {
        for (var i = 0; i < datas.length; i++) {
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
                {arr.map((data) =>
                    <div key={data.Index.toString()} className={styles.contacts}>
                        <div className={styles.block}>
                            <a href={data.Website} className={styles.title}>{data.Restaurant}</a>
                            <h4>{data.Type}</h4>
                            <h4> Address: <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </h4>
                            <h4> Phone: <a href={`tel:${data.Phone}`}>{data.Phone}</a></h4>
                            <h4>{data.Info}</h4>
                        </div>
                    </div>
                )}
            </div>
        )
    } if (props.value.length > 0 && props.value !== "All" && props.del) {
        for (var i = 0; i < datas.length; i++) {
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
                {arr.map((data) =>
                    <div key={data.Index.toString()} className={styles.contacts}>
                        <div className={styles.block}>
                            <a href={data.Website} className={styles.title}>{data.Restaurant}</a>
                            <h4>{data.Type}</h4>
                            <h4> Address: <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </h4>
                            <h4> Phone: <a href={`tel:${data.Phone}`}>{data.Phone}</a></h4>
                            <h4>{data.Info}</h4>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    else {
        return (
            <div className={styles.back}>
                {datas.map((data) =>
                    <div key={data.Index.toString()} className={styles.contacts}>
                        <div className={styles.block}>
                            <a href={data.Website} className={styles.title}>{data.Restaurant}</a>
                            <h4>{data.Type}</h4>
                            <h4> Address: <a href={`https://www.google.com/maps/search/?api=1&query=${data.Maps}`}>{data.Address}</a> </h4>
                            <h4> Phone: <a href={`tel:${data.Phone}`}>{data.Phone}</a></h4>
                            <h4>{data.Info}</h4>
                            <div>
                            </div>
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
            margin-top: 15px;
            margin-left: 10px;
            padding: 10px;
            background-color: white;
                
            `,
    back: css`
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
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
    `
}

export default List;