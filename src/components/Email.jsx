import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { css } from 'emotion'




const Email = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const send = (event) => {
        event.preventDefault();
        const data = {
            name: name,
            email: email,
            message: message
        };


        axios.post("/api/v1", data, {

        })
            .then(res => {
                setName("");
                setMessage("");
                setEmail("");
                props.topMessage("Message sent! I will make the updated ASAP =)")
            })
            .catch((error) => {
                console.log(error, 'Message not sent')
            })

    }

    const emptySent = () => {
        props.topMessage("")
    }

    const handleChangeName = (event) => {
        setName(event.currentTarget.value)
    }


    const handleChangeMessage = (event) => {
        setMessage(event.currentTarget.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.currentTarget.value)
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <form action="/action_page.php">
                    <label > Your name</label>
                    <input onClick={emptySent} onChange={handleChangeName} className={styles.same} type="text" name="firstname" placeholder="Your Name" value={name} />
                    <label > E-mail</label>
                    <input onClick={emptySent} onChange={handleChangeEmail} className={styles.same} type="text" name="email" placeholder="Your Email" value={email} />
                    <label > Message</label>
                    <textarea onClick={emptySent} onChange={handleChangeMessage} className={styles.same} name="subject" placeholder="What would you like to add/remove or update?" value={message}></textarea>
                    <button onClick={send} className={styles.b} type="submit" value="Submit"> Send </button>
                </form>
            </div>
        </div>
    )
}


const styles = {
    wrapper: css`
        height: 100vh;
        color: white;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        background-color: #2F4F4F;
    `,
    same: css`
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
}
    `,
    b: css`
    align-self: center;
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`,
}

export default withRouter(Email);