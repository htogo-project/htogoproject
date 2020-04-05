import React from 'react';
import { css } from 'emotion'
import Logo from '../images/htg.png'


function Header() {
    return (
        <div className={styles.header}>
           <img src={Logo}/> 
        </div>
    )
}


const styles = {
    header: css`
    margin-top: 0px;
    margin-left: 0px;
    @media (max-width: 320px) {
       img{ width: 80% ;
       }
    }
    `
}

export default Header;