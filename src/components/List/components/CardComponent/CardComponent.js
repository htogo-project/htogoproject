import React, { useContext, useCallback, useEffect, useState } from "react"
import styled from "styled-components"

// context
import { ListContext } from "../../../ListContext"

// components
import { ClaimButton, ClaimedButton } from "../ClaimedButtons"


var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
// console.log(is_mobile)
var percentageWidth = is_mobile ? '80%' : '100%';
var height = is_mobile ? '120px' : '60%';
var isMobileTransform = is_mobile ? 'none' : 'translateX(-10%) translateY(-10%)';

const Card = styled.div`
  display: -webkit-flex;
  display: flex;
  gap: 10px;
  justify-content: space-between;;
  width: ${percentageWidth};
  height: ${height};
  margin: 3% auto 5px auto;
  box-sizing: border-box;
  box-shadow: 0 0 5px 0 black;
  -webkit-transform: ${isMobileTransform};
  -moz-transform: ${isMobileTransform};
  transform: ${isMobileTransform};
`
const CardImg = styled.div`
  display: -webkit-flex;
  display: flex;
  /* margin: auto; */
  justify-content: center;
  align-items:center;
  width: 40%;
  > img {
    display: flex;
    margin: auto;
    justify-content: center;
    margin: 0 4px;
    width: 200px;
    height: 120px;
  }
`
const CardDescription = styled.div`
  display: -webkit-flex;
  display: flex;
  flex: 1 0 163px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const CardDescriptionTitle = styled.div`
display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
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
  const cardIsClaimed = true

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
        {cardIsClaimed ? <ClaimButton /> : <ClaimedButton />}
          <a href={place.Website}>{place.Name}</a>
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
