import React from 'react';
import { css } from 'emotion'



function Email(props) {
    const goBack = () => {
        props.setAdc(false)
    }


    return (
        <div>
            <button onClick={goBack} className={styles.goBack}> Go Back </button>
            <div className={styles.wrapper}> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shirazipatricia@gmail.com" target="_blank"> E-mail me </a>  
            <p> at shirazipatricia@gmail.com to include/update or remove your business from this website.</p>   
            <p> Created by <a href="https://www.patriciashirazi.com/">Patricia Shirazi</a></p> to help the Humboldt community =) </div>
        </div>
    )
}


const styles = {
    wrapper: css`
        height: 110vh;
        font-family: Georgia, serif;
        font-size: 24px;
        text-align: center;
        color: white;
        margin-top: 20px;
        background-color: #2F4F4F;
        a {
            color: white;
        }
    `,
    goBack: css`
    margin-left: 20px;
    `
}

export default Email;