import React, { useContext, useCallback, useEffect, useState } from "react"
import styled from "styled-components"

// context
import { ListContext } from "../../../ListContext"

// components
import { ClaimButton, ClaimedButton } from "../ClaimedButtons"

const Card = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex: 1 1 410px;
  flex-wrap: wrap;
  box-sizing: border-box;
  box-shadow: 0 0 5px 0 black;
`
const CardImg = styled.div`
  flex: 1 0 130px;
  display: flex;
  > img {
    width: 100%;
  }
`
const CardDescription = styled.div`
  display: flex;
  flex: 1 0 163px;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  height: 100%;
`
const CardDescriptionTitle = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 1.6rem;
    color: #322a2a;
    font-weight: bold;
  }
`
const CardDescriptionText = styled.p`
  font-size: 1.2rem;
  color: #a4a4a4;
  font-weight: bold;
  margin: 0;
`
const CardDescriptionHour = styled.p`
  font-size: 1.2rem;
  color: #008037;
  margin: 0;
`
const CardDescriptionAddress = styled.a`
  font-size: 1.4rem;
  text-decoration: underline;
  color: #322a2a;
`

export const CardComponent = ({ CardElement }) => {
  const { places } = useContext(ListContext)
  const [place, setPlace] = useState({})
  const cardIsClaimed = false

  const firstPlace = useCallback(() => {
    CardElement ? setPlace(CardElement) : setPlace(places[0])
  }, [setPlace, places, CardElement])

  useEffect(() => {
    firstPlace()
  }, [firstPlace])

  return (
    <Card>
      <CardImg>
        <img src={place.Image} alt={place.Name} />
      </CardImg>
      <CardDescription>
        <CardDescriptionTitle>
          <a href={place.Website}>{place.Name}</a>
          {cardIsClaimed ? <ClaimButton /> : <ClaimedButton />}
        </CardDescriptionTitle>
        <CardDescriptionText>{place.Type}</CardDescriptionText>
        <CardDescriptionText>{place.Info}</CardDescriptionText>
        {place.Hours && (
          <CardDescriptionHour>
            {place.Hours[new Date().getDay()]}
          </CardDescriptionHour>
        )}
        <CardDescriptionAddress href={`tel:${place.Phone}`} target='_blank'>
          {place.Phone}
        </CardDescriptionAddress>
        <CardDescriptionAddress
          href={`https://www.google.com/maps/search/?api=1&query=${place.Maps}`}
          target='_blank'
        >
          {place.Address}
        </CardDescriptionAddress>
      </CardDescription>
    </Card>
  )
}
