import React from 'react';
import { css } from 'emotion'

import Search from './Search';
import Nav from './Nav';

import Logo from '../images/htogo.png'



const Header = (props) => {
    return (
        <div className={styles.header_wrapper}>
            <div className={styles.header}>
                <img src={Logo} />
                <Search list={props.list} setList={props.setList} setCurrentCity={props.setCurrentCity} currentCity={props.currentCity} business={props.business} setBusiness={props.setBusiness}/>
            </div>
            <Nav />
        </div>
    )
}


const styles = {
    header_wrapper: css`
        overflow-x: hidden;
        position: fixed;
        top: 0;
        left: 0;
        background-color: white;
        width: 100vw;
        height: 25%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media (max-width: 767px) {
            width: 100vw;
        }
    `,
    header: css`
        height: 130px;
        width: 60%;
        display: flex;
        left: 0;
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