import React, { useContext } from "react";

import { css } from 'emotion'
import { ListContext } from './ListContext';


const UserView = () => {
    const { city } = useContext(ListContext);
    const { places } = useContext(ListContext);
    const { type } = useContext(ListContext);



    return (
        <div className={styles.icons_wrapper}>
            <span className={styles.showing_x_results}> Showing {places.length} {type} in {city}</span>
            {/* <ul className={styles.icons}>
                <li onClick={() => props.setView(false)}>List</li>
                <li onClick={() => props.setView(true)}>Map</li>
            </ul> */}
        </div>
    )
}

const styles = {
    icons_wrapper: css`
        position: absolute;
        top: 25%;
        left: 0;
        // border: 3px solid pink;
        background-color: white;
        width: 100vw;
        height: 13%;
        min-height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        // z-index: 100;
        @media (max-width: 767px) {
            height: 4%;
            width: 100vw;
            justify-content: space-around;
            align-items: center;
        }
`,
    icons: css`
        width: 40%;
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
            text-align: center;
            list-style-type: none;
        }
        @media (min-width: 767px) {
            display: none;
        }`,
    showing_x_results: css`
        font-weight: bold;
        color: #322a2a;
        @media (min-width: 767px) {
            margin-left: 15%;
            font-size: 28px;
        }
  
      `
}
export default UserView;