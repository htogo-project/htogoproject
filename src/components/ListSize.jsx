import React from 'react';
import { css } from 'emotion'



const ListSize = (props) => {

    return (
        <div>
            <span className={styles.showing_x_results}> Showing {props.restaurant.length} {props.business} in {props.currentCity}</span>
        </div>
    )
}




const styles = {
        showing_x_results: css`
            position: fixed;
            // border: 3px solid yellow;
            z-index: 99;
            top: 30%;
            width: 50%;
            height: 10%;
            text-align: center;
            font-weight: bold;
            font-size: 1.5rem;
            color: #322a2a;
            background-color: white;
            @media (max-width: 767px) {
                top: 25%;
                width: 100%;
                left: 0;
                height: 5%;
            }`
}

export default ListSize;