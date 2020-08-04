import React from 'react';
import { css } from 'emotion'

// import Logo from '../images/htg21.png'
import Logo from '../images/htogo.png'



const Header = () => {
    return (
        <div className={styles.header}>
            <img src={Logo} />
        </div>
    )
}


const styles = {
    header: css`
    margin-top: 10px;
    `
}

export default Header;