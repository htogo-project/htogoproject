import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import Header from './Header'
import Email from './Email'
import { css } from 'emotion'


const Contact = (props) => {
    const [sent, setSent] = useState("Send a message to add or update your business information");
  

    const history = useHistory();

    useEffect(() => {
        return () => {
            if (history.action === 'POP') {
                props.setAdc(false)
                props.history.push('/');
            }
        }
    })

    const goBack = () => {
        props.setAdc(false)
        props.history.push('/')
        props.setAdc(false)

    }


    return (
        <div>
            <Header />
            <h4 className={styles.sent}>{sent}</h4>
            <button onClick={goBack} className={styles.goBack}> Go Back </button>
            <Email topMessage={setSent}/>
        </div>
    )
}


const styles = {
    sent: css`
    color: black;
    text-align: center;
    `,
    goBack: css`
    cursor: pointer;
    outline: none;
    border: 1px solid black;
    margin-left: 20px;
    `

}

export default withRouter(Contact);
