import React from 'react';
import { css } from 'emotion';



const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>Sign in</li>
                <li>Login</li>
                <li>About</li>
            </ul>
        </nav>
    )
}


const styles = {
    nav: css`
    ul {
        // border: 2px solid black;
        position: absolute;
        list-style-type: none;
        width: 30%;
        left: 60%;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        li {
            cursor: pointer;
        }
    }
    @media(max-width:767px) {
        display: none;
    }
    `
}

export default Nav;