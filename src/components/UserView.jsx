import React from "react";

import { css } from 'emotion'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faThList } from '@fortawesome/free-solid-svg-icons'

const UserView = (props) => {

    const setToMap = () => {
        props.maplist(true)

    }

    const setToList = () => {
        props.maplist(false)

    }

    return (
        <div className={styles.icons_wrapper}>
            <div className={styles.icons}>
                <a onClick={setToMap}><FontAwesomeIcon icon={faMapMarkedAlt} /></a>
                <a onClick={setToList}><FontAwesomeIcon icon={faThList} /></a>
            </div>
        </div>
    )
}

const styles = {
    icons_wrapper: css`
    position: fixed;
    top: 146px;
    padding-right: 12px;
    // border: 3px solid pink;
    background-color: white;
    width: 100vw;
    height: 50px;
    display: flex;
    z-index: 1;
    justify-content: flex-end;
     @media (min-width: 767px) {
        display: none;
    }

    
`,
    icons: css`
    width: 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    cursor: pointer;
    @media (min-width: 767px) {
        display: none;

    }
    @media (width: 280px) {
        width: 20%;
        padding: 5px;
    }
    @media (width: 320px) {
        width: 20%;
        padding: 5px;
    }
`,
}
export default UserView;