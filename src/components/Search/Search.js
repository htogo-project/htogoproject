import React, { useState, useContext, useEffect, useCallback } from "react"
import { ListContext } from "../ListContext"
import { css } from "emotion"

import list from "../../Humboldttogo.json"

const styles = {
  search_wrapper: css`
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    max-width: 350px;
    > div {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      > input {
        flex: 1 1 64%;
      }
      > select {
        flex: 1 1 35%;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5),
          0 2px 2px 0 rgba(0, 0, 0, 0.19);
        outline: none;
        background-color: white;
        border: none;
        font-size: 15px;
        padding: 1px;
        height: 30%;
        ::before {
          height: 30%;
          margin: 0;
        }
        > option {
          color: #322a2a;
        }
      }
    }
  `,
  filter_options: css` 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 5px;
        background-color: white;
        width: 60%;
        height: 30%;
        gap: 10px;
        }
        button {
          flex: 1 1 auto;
            box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5), 0 2px 3px 0 rgba(0, 0, 0, 0.19);
            cursor: pointer;
            border: none;
            outline: none;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;   
            font-family: 'Oswald', sans-serif;
            background-color: white;
            &:hover {
                background-color: #8fbc8f;
            }
   
        }
        @media (max-width: 767px) {
            width: 100%;
        } 
    `,
  typeSearch: css`
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5), 0 2px 3px 0 rgba(0, 0, 0, 0.19);
    border: none;
    background-color: white;
    outline: none;
    font-size: 15px;
  `,
}

export const Search = () => {
  const { city, setCity } = useContext(ListContext)
  const { type, setType } = useContext(ListContext)
  const { setPlaces } = useContext(ListContext)
  const { setReady } = useContext(ListContext)

  const [delivery, setDelivery] = useState(false)
  const [keyword, setKeyword] = useState("")

  const cities = [
    "Humboldt",
    "Arcata",
    "Eureka",
    "Ferndale",
    "Fortuna",
    "Mckinleyville",
    "Carlotta",
    "Trinidad",
    "Rio Dell",
    "Whitethorn",
    "Scotia",
    "Hydesville",
  ]

  //setting placeholder according with type of business
  const [options, setOptions] = useState("Search type")

  const setList = (city, key, type, delivery) => {
    if (type === "Other") {
      setOptions("pet shop, flowers, books...")
    } else if (type === "Restaurants") {
      setOptions("tacos, sushi, icecream...")
    } else {
      setOptions("Search type")
    }
    const filterCity =
      city !== "Humboldt" ? list.filter((el) => el.City === city) : list
    const filtered = delivery
      ? filterCity.filter((el) => el.Info.includes("Delivery"))
      : filterCity
    const filterKey =
      key.length > 0
        ? filtered.filter((el) => el.Keywords.toLowerCase().includes(key))
        : filtered
    const filterType =
      type !== "businesses"
        ? filterKey.filter((el) => el.Business === type)
        : filterKey
    setReady(true)
    return filterType
  }
  const SetPlaces = useCallback(() => {
    setPlaces(setList(city, keyword, type, delivery))
  }, [city, keyword, type, delivery])

  useEffect(() => {
    SetPlaces()
  }, [SetPlaces])

  // useEffect(() => {
  //   setPlaces(setList(city, keyword, type, delivery))
  // }, [city, keyword, type, delivery])

  // const test = () => {
  //   const finalList = setList(city, keyword, type, delivery)
  //   console.log(setList(city, keyword, type, delivery))
  //   setPlaces(finalList)
  // }
  let str = ""
  var getKeyword = (e) => {
    str += e.currentTarget.value
    setKeyword(str)
  }

  const setFilter = (e) => {
    if (type !== e.target.textContent) {
      setType(`${e.target.textContent}`)
      e.target.textContent === "Other"
        ? (e.target.parentNode.childNodes[0].style.backgroundColor = "white")
        : (e.target.parentNode.childNodes[1].style.backgroundColor = "white")
      e.target.style.backgroundColor = "#8fbc8f"
    } else {
      setType("businesses")
      e.target.style.backgroundColor = "white"
    }
  }

  const toggleDelivery = (e) => {
    if (delivery) {
      setDelivery(false)
      e.target.style.backgroundColor = "white"
    } else {
      setDelivery(true)
      e.target.style.backgroundColor = "#8fbc8f"
    }
  }

  return (
    <div className={styles.search_wrapper}>
      <div>
        <input
          onChange={getKeyword}
          className={styles.typeSearch}
          placeholder={options}
        />
        <select onChange={(e) => setCity(e.target.value)}>
          <option value=''>City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filter_options}>
        <button onClick={setFilter}>Restaurants</button>
        <button onClick={setFilter}>Other</button>
        <button onClick={toggleDelivery}>Delivery</button>
      </div>
    </div>
  )
}
