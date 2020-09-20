import React, { useState } from 'react';
import { css } from 'emotion';



const Nav = () => {

    const [nav_mobile, setNav_mobile] = useState(styles.menu)

  

    return (
            <div className={styles.nav}>
                <label onClick={() => nav_mobile === styles.menu ? setNav_mobile(styles.menuMobile) : setNav_mobile(styles.menu)} className={styles.label} for={"toggle"}>&#9776;</label>
                <nav className={nav_mobile}>
                    <ul>
                        <li>For business</li>
                        <li>Login </li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>
    )
}

const styles = {
    nav: css`
        // position: relative;
        // top: 0;
        // right: 50px;
        text-align: right;
        height: 70px;
        line-height: 70px;
        width: 100%;
        // z-index: 100;
        background-color: white;
        display: flex;
        justify-content: flex-end;
        @media(max-width: 900px) {
            position: absolute;
            // border: 2px solid black;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 30%;
            top: 0;
            right: 10px;
            height: auto;
            z-index: 100;

        }
        `,
        menu: css`
            margin: 0px 50px 0 0;
            display:block;
            @media(max-width: 900px) {
                display: none;
            }
            ul {
                display: flex;
                justify-content: space-between;
                @media(max-width: 900px) {
                    display: none;
                }
            }
            ul li {
                list-style-type: none;
                cursor: pointer;
                clear: right;
                text-decoration: none;
                color: gray;
                margin: 0 10px;
                line-height: 70px;
                @media(max-width: 900px) {
                    display: none;
                }
        `,
        menuMobile: css`
        position: absolute;
        width: 100vw;
        right: 0;
        height: auto;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 100%;
        @media(min-width: 900px) {
            display: none;
        }
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                z-index: 150;
                // border: 2px solid red;
                flex-direction: column;
                list-style-type: none;
                justify-content: center;
                align-items: center;
            }
            ul li {
                width: 100%;
                margin-left: 0;
                // border: 2px solid brown;
                display: flex;
                justify-content: center;
                align-items: center;
                list-style-type: none;
                text-decoration: none;
                color: grey;
        `,
        label: css`
            // margin: 0 40px 0 0;
            font-size: 26px;
            // line-height: 70px;
            display: none;
            width: 26px;
            float: right;
            @media(max-width: 900px) {
                outiline: none;
                // margin: 0 -30px 0 0;
                display: block;
                cursor: pointer;
            }
        `,
    }


export default Nav;