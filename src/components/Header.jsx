import React from 'react';
import { css } from 'emotion'



function Header() {
    return (
        <div className={styles.header}>
           <div>HumboldToGo</div> 
        </div>
    )
}


const styles = {
    header: css`
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 26px;
    height: 40px;
    padding: 10px;
    color: black;
    margin-left: 40px;
    `
}

export default Header;