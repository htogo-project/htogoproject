import React from 'react';
import { css } from 'emotion'

import Logo from '../images/htg21.png'
// import Logo from '../images/htogo.png'



const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <img src={Logo} />
            </div>
        </div>
    )
}


const styles = {
    header: css`
    margin-top: 0px;
    margin-left: 8px;
    @media (max-width: 320px) {
       img{ width: 80% ;
       }
    }
    `
}

export default Header;