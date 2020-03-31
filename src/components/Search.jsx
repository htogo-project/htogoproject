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
                <input type="text" placeholder="Search ZipCode" name="search" onChange={handleChange} onClick={handleClickIB}/>
                <button onClick={handleClick} type="submit"><i> Search </i></button>
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
    `
}

export default Search;