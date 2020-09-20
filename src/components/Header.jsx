import React from 'react';
import { css } from 'emotion'

import Search from './Search';
import Nav from './Nav';
import UserView from './UserView';



import Logo from '../images/htogo.png'



const Header = () => {

    return (
        <div className={styles.fixed_top}>
            <div className={styles.header_wrapper}>
                <div className={styles.header}>
                    <img src={Logo} />
                    <Search />
                </div>
                <Nav />
            </div>
            <UserView />
        </div>
    )
}


const styles = {
    fixed_top: css`
        position: fixed;
        height: 28%
        z-index: 99;
        min-height: 500px;
        top: 0;
        left: 0;
        // border: 2px solid black;
        width: 100vw;
    `,
    header_wrapper: css`
        border-bottom: 1px solid #EAEAEB;
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
        width: 100vw;
        height: 25%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        // border: 2px solid blue;
        @media (max-width: 767px) {
            width: 100vw;
        }
    `,
    header: css`
        position: absolute;
        height: 100%;
        width: 60%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        // border: 2px solid purple;
        @media (max-width: 767px) {
            height: 100%;
            width: 100%;
        }
    `,
}

export default Header;