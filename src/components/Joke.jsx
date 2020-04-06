import React, { useState, useEffect } from 'react';
import { css, keyframes } from 'emotion'





const Joke = () => {
    const jokes = ["Quarentine day 20th. Google search: is avocato a fruit or a vagetable. - Sent by @jenlin", "Wanna hear a joke about pizza? Never mind it's too cheesy. -Sent by @saramizzay", " What do you call a fake noodle? An impasta. - Sent by @soulproprietor", "Go to contact to send your favorite restaurant information or a better joke D:!"]


    const [joke, setJoke] = useState(jokes[0])

    const startSlide = () => {

            if (jokes.indexOf(joke) + 1 !== jokes.length) {
                let actualJokeIndex = jokes.indexOf(joke) + 1
                setJoke(jokes[actualJokeIndex]);

            } else {
                setJoke(jokes[0])


            }
    }
    let ciclo;
    useEffect(() => {
      ciclo = setInterval( function() {
            startSlide()

        }, 6000);

        return () => {
            clearInterval(ciclo)

        }
    })
    return (
        <div className={styles.wrap}>
            <p className={styles.joke}>{joke}</p>
        </div>
    )
}


const fadeText = keyframes` {
    0% {
      color: #C7F0D8;
    }
    50% {
    color: #324038;
    }
    100% {
      color: #AEC7EC;
    }
  }
  `;

const styles = {
    joke: css`
        text-align: center;
        // font-size: 12px;
        font-style: italic;
        animation: ${fadeText} 5s ease infinite;
    `,
    wrap: css`
        margin: auto;
        width: 80%;
    `
}

export default Joke;