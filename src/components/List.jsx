import React from 'react';
import { css } from 'emotion'
import datas from "../Humboldttogo.json"


function List(props) {
    let arr = [];
    if (props.value.length === 5 && typeof (Number(props.value)) === "number") {
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].Address.includes(props.value)) {
                arr.push(datas[i])
            }
        }
        return (
            <div className={styles.wrapper}>
                <table className={styles.header}>
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th>Type</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Opening Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((data) =>
                            <tr key={data.Index.toString()} className={styles.restaurant}>
                                <td>{data.Restaurant}</td>
                                <td>{data.Type}</td>
                                <td>{data.Address}</td>
                                <td>{data.Phone}</td>
                                <td>{data.Opening}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
    if (props.value.length === 5 && typeof (Number(props.value)) === "number" && props.cousine.length > 0) {
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].Address.includes(props.value) && datas[i].Type.includes(props.cousine)) {
                arr.push(datas[i])
            }
        }
        return (
            <div className={styles.wrapper}>
                <table className={styles.header}>
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th>Type</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Opening Hours</th>
                        </tr>
                    </thead>
                    <tbody>

                        {arr.map((data) =>
                            <tr key={data.Index.toString()} className={styles.restaurant}>
                                <td>{data.Restaurant}</td>
                                <td>{data.Type}</td>
                                <td>{data.Address}</td>
                                <td>{data.Phone}</td>
                                <td>{data.Opening}</td>
                            </tr>)}
                    </tbody>

                </table>
            </div>
        )
    }




    else {
        return (
            <div className={styles.wrapper}>
                <table className={styles.header}>
                    <thead>
                        <tr>

                            <th>Restaurant</th>
                            <th>Type</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Opening Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data) =>
                            <tr key={data.Index.toString()} className={styles.restaurant}>
                                <td>{data.Restaurant}</td>
                                <td>{data.Type}</td>
                                <td>{data.Address}</td>
                                <td>{data.Phone}</td>
                                <td>{data.Opening}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}



const styles = {
    wrapper: css`
        display:flex;
        justify-content: center;

    `,
    header: css`
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        width: 100%;
    `,
    restaurant: css`
        background-color: white;
        color: green;
        border: 2px solid black;
        padding: 8px;
    `
}

export default List;