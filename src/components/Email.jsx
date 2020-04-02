import React from 'react';
import { css } from 'emotion'



function Email(props) {
    const goBack = () => {
        props.setAdc(false)
    }


    return (
        <div>
            <button onClick={goBack}> Go Back </button>
            <div className={styles.wrapper}> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shirazipatricia@gmail.com" target="_blank"> E-mail me </a>  
            <p> to include/update or remove your business from this website.</p>  </div> 
        </div>
    )
}


const styles = {
    wrapper: css`
        height: 110vh;
        font-size: 24px;
        text-align: center;
        color: white;
        margin-top: 20px;
        background-color: #2F4F4F;
        a {
            color: white;
        }
    `,
}

export default Email;