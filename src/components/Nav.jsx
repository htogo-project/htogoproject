import React, { useState } from 'react';
import { css } from 'emotion';



const Nav = () => {

    const [nav_mobile, setNav_mobile] = useState(styles.nav_mobile)

    return (
        <div>
            <nav className={styles.nav}>
                <ul>
                    <li>Sign in</li>
                    <li>Login</li>
                    <li>About</li>
                </ul>
            </nav>
            {/* <div onClick={() => nav_mobile === styles.nav_mobile ? setNav_mobile(styles.nav_mobile_clicked) : setNav_mobile(styles.nav_mobile)} 
            className={styles.mobile_menu_container}>
                <div></div>
                <div></div>
                <div></div>
            </div> */}
            <div className={styles.mobile_menu_container}>
                <label onClick={() => nav_mobile === styles.nav_mobile ? setNav_mobile(styles.nav_mobile_clicked) : setNav_mobile(styles.nav_mobile)}
                for="toggle">&#9776;</label>
                <nav className={nav_mobile}>
                    <ul>
                        <li>Sign in</li>
                        <li>Login</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


const styles = {
    nav: css`
    ul {
        // border: 2px solid black;
        position: absolute;
        list-style-type: none;
        width: 20%;
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
    `,
    nav_mobile: css`
        display: none;
        @media(max-width:767px) {
            // position: absolute;
            ul {
                border: 2px solid black;
                // position: absolute;
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
        }
    `,
    nav_mobile_clicked: css`
            text-align: center;
            width: 100%;       
            // position: absolute;
            margin: 0 30px 0 0;
            ul {
                display: block;
                list-style-type: none;
                border-bottom: 1px solid #EAEAEB;
            li {
                cursor: pointer;
            }    
    }
`,
    mobile_menu_container: css`
        cursor: pointer;
        display: none;
        label {
            margin: 0 40px;
            font-size: 26px;
            display: none;
            width: 26px;
            float: right;
        }
        @media(max-width: 900px){
            display: flex;
            label {
                display:flex;
                margin: 0 40px 0 0;
                font-size: 26px;
            }
        }
    
`,
}

export default Nav;