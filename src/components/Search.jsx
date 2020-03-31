import React, {useState} from 'react';
import { css } from 'emotion';




function Search(props) {
    const [message, setMessage] = useState("")

    const handleChange = (event) => {
        props.setValue(event.currentTarget.value)
    }

    const handleClickIB = () => {
        setMessage("")
    }
    const handleClick = () => {
        if (props.value.length < 5 || typeof props.value !== "number") {
            setMessage("not a valid zipCode")
        }
    }


    return (
        <div className={styles.s}>
            <div className={styles.search}>
                <input className={styles.input}type="text" placeholder="Search ZipCode" name="search" onChange={handleChange} onClick={handleClickIB}/>
                {/* <button className={styles.button} onClick={handleClick} type="submit"><i> Search </i></button> */}
                <p>{message}</p>
            </div>
        </div>

    )
}


const styles = {
    s: css`
        display: flex;
        background: silver;
        width: 100%;
        height: 20%; 
    `,
    input: css`
        width: 300px;
        height: 50px; 
        margin-left: 5%;
        margin-top: 10px;
    `,
    button: css`
        margin-left: 5%;
        margin-top: 10px;
    `
}

export default Search;