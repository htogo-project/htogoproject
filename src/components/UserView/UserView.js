import React, { useContext } from "react"
import "react-placeholder/lib/reactPlaceholder.css"

import { css } from "emotion"
import { ListContext } from "../ListContext"

const styles = {
  icons_wrapper: css`
s    // margin: auto;
    margin: 10px 0 30px 0;
    background-color: white;
    // width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border-color: black;
    }
  `,
  icons: css`
    display: flex;
    height: 70%;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: gray;
    border: 3px solid blue;
    cursor: pointer;
    li {
      width: 40%;
      margin-top: 0;
      border: 1px solid grey;
      text-align: center;
      list-style-type: none;
    }
    @media (min-width: 767px) {
      display: none;
    }
  `,
  showing_x_results: css`
    height: auto;
    font-weight: bold;
    color: #322a2a;
    font-size: 2rem;
    text-align: center;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    width: 100%;
  `,
}

export const UserView = () => {
  // const [placeholderClass, setplaceholderClass] = useState(
  //   styles.showing_x_results
  // )

  const { city } = useContext(ListContext)
  const { places } = useContext(ListContext)
  const { type } = useContext(ListContext)

  return (
    <div className={styles.icons_wrapper}>
      <span className={styles.showing_x_results}>
        Showing {places.length} {type} in {city}
      </span>

      {/* <ul className={styles.icons}>
                <li onClick={() => props.setView(false)}>List</li>
                <li onClick={() => props.setView(true)}>Map</li>
            </ul> */}
    </div>
  )
}
