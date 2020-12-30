import React, { useContext } from "react"
// import styled from "styled-components"
import styled from "styled-components"
// components
import { ListContext } from "../ListContext"
import { CardComponent } from "../CardComponent"

const PlaceListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const List = () => {
  const { places } = useContext(ListContext)

  return (
    <PlaceListWrapper>
      {places.map((place, index) => (
        <CardComponent key={index} CardElement={place} />
      ))}
    </PlaceListWrapper>
  )
}
