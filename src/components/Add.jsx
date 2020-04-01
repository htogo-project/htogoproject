import React from 'react';
import { css } from 'emotion'



function Add(props) {

    const sendMeAnEmail = () => {
        if(!props.adc) {
            props.setAdc(true)
        } else {
            props.setAdc(false)
        }
    }

    return (
       <div>
           <button onClick={sendMeAnEmail} className={styles.add}>o</button>
       </div>
    )
}


const styles = {
    add: css`
        display: inline-block;
        background-color: white;
        border: 1px solid grey;
        margin-left: 10px;
        outline: none;
        cursor: pointer;
    `
}

export default Add;