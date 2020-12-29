import React, { useContext } from "react"
import "react-placeholder/lib/reactPlaceholder.css"

import { css } from "emotion"
import { ListContext } from "../ListContext"

const styles = {
  icons_wrapper: css`
    top: 24%;
    left: 0;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
  `,
  icons: css`
    width: 40%;
    display: flex;
    height: 70%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: gray;
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
    width: auto;
    height: auto;
    font-weight: bold;
    color: #322a2a;
    font-size: 2rem;
    text-align: center;
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
