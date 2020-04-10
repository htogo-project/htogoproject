import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion'





const Delivery = (props) => {


    const isItDelivery = () => {
        if (!props.del) {
            props.setDel(true);
        } else {
            props.setDel(false);
        }
    };



    return (
        <div>
            <form action="/action_page.php">
                <input className={styles.labelInput} onClick={isItDelivery} type="checkbox" name="delivery" value="Delivery" />
                <label className={styles.label}> Delivery</label><br></br>
            </form>
        </div>
    )
}


const styles = {
    label: css`
        font-family: Helvetica,Arial,sans-serif;
        color: white;
        margin-botton: 15px;
        font-weight: bold;
     `,
}

export default Delivery;