import React, { useContext, useCallback, useEffect, useState } from "react"
import styled from "styled-components"

// context
import { ListContext } from "../ListContext"

const Card = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  width: 400px;
  > img {
    width: 150px;
  }
`
const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const CardDescriptionTitle = styled.a`
  font-size: 1.6rem;
  color: #322a2a;
  font-weight: bold;
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

  const firstPlace = useCallback(() => {
    CardElement ? setPlace(CardElement) : setPlace(places[0])
  }, [setPlace, places, CardElement])

  useEffect(() => {
    firstPlace()
  }, [firstPlace])

  return (
    <Card>
      <img src={place.Image} alt={place.Name} />
      <CardDescription>
        <CardDescriptionTitle href={place.Website}>
          {place.Name}
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
