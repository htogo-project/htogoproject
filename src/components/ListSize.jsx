import React from 'react';
import { css } from 'emotion'





const ListSize = (props) => {

    return (
        <div>
            <span className={styles.showing_x_results}> Showing {props.restaurant.length} {props.business} in {props.value}</span>
        </div>
    )
}




const styles = {
    showing_x_results: css`
        position: fixed;
        // border: 3px solid yellow;
        width: 100%;
        height: 60px;
        background-color: white;
        top: 150px;
        color: #322a2a;
        width: 100%;
        margin-left: 40px;
        margin-top: 25px;
        font-weight: bold;
        font-size: 16px;
        @media (min-width: 767px) {
            padding-top: 25px;
            top: 100px;
            left: 50px;
            font-weight: bold;
            margin-left: -1px;
            font-size: 20px;
        }
        @media (min-width: 1023px) {
            left: 20%;
            font-size:24px;
            padding-top: 25px;
            top: 108px;
        }
        @media (width: 280px) {
            font-size: 12px;
            top: 150px;
            margin-left: 6px
        }
        @media (width: 320px) {
            font-size: 16px;
            margin-left: 10px;
        }
`,
}

export default ListSize;