import React, { useState } from 'react';
import { css } from 'emotion'
import axios from 'axios';


function Contact(props) {
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


        axios.post('/api/v1', data)
        .then( res => {
            setName("");
            setMessage("");
            setEmail("");
        })
        .catch( () => {
          console.log('Message not sent')
        })
  
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
                    <label > Name</label>
                    <input onChange={handleChangeName}className={styles.same} type="text" name="firstname" placeholder="Your Name"  value={name} />
                    <label > E-mail</label>
                    <input onChange={handleChangeEmail} className={styles.same} type="text" name="email" placeholder="Your Email"  value={email}/>
                    <label > Message</label>
                    <textarea onChange={handleChangeMessage} className={styles.same}  name="subject" placeholder="What would you like to add/remove or update?"  value={message}></textarea>
                    <button onClick={send}className={styles.b} type="submit" value="Submit"> Send </button> 
                </form>
            </div>
        </div>
    )
}


const styles = {
    wrapper: css`
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

export default Contact;