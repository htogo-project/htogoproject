import React, { useContext } from "react"
// import styled from "styled-components"
import styled from "styled-components"
// components
import { ListContext } from "../ListContext"
import { CardComponent } from "../CardComponent"

const PlaceListWrapper = styled.section`
  display: flex;
  flex: 0 1 400px;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2rem 0;
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
