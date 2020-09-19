import React, { useContext, useMemo } from 'react';
import { css } from 'emotion'


import List from './List';
// import Map from './Map';



const Body = () => {
    return (
        <div className={styles.list_wrapper}>
            {/* <List /> */}
            {/* <Map view={props.view} places={props.places} /> */}
        </div>
    )
}




const styles = {
    list_wrapper: css`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        // border: 3px solid blue;
    `,
}

export default Body;