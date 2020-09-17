import React from "react";

import { css } from 'emotion'



const UserView = (props) => {

    return (
        <div className={styles.icons_wrapper}>
            <span className={styles.showing_x_results}> Showing {props.restaurant.length} {props.business} in {props.currentCity}</span>
            <ul className={styles.icons}>
                <li onClick={() => props.setView(false)}>List</li>
                <li onClick={() => props.setView(true)}>Map</li>
            </ul>
        </div>
    )
}

const styles = {
    icons_wrapper: css`
        position: fixed;
        top: 24%;
        left: 0;
        // border: 3px solid pink;
        background-color: white;
        width: 100vw;
        height: 13%;
        display: flex;
        z-index: 100;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
            height: 4%;
            width: 100vw;
            justify-content: space-around;
        }
`,
    icons: css`
        // position: absolute;
        width: 40%;
        // margin-top: 0;
        // border: 3px solid lightblue;
        display: flex;
        height: 70%;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        color: gray;
        cursor: pointer;
        li {
            width: 40%;
            margin-top: 0;
            border: 1px solid grey;
            list-style-type: none;
        }
        @media (min-width: 767px) {
            display: none;
        }`,
        showing_x_results: css`
        font-weight: bold;
        // font-size: 1.5rem;
        color: #322a2a;
  
      `
}
export default UserView;