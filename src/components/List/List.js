import React, { useContext } from "react";
import styled from "styled-components";

import { ListContext } from "../ListContext";
import { CardComponent } from "./components/CardComponent";

var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry|ipad/ig) || false;
var percentage = is_mobile ? '100%' : '30%';
const PlaceListWrapper = styled.section`
  /* border: 3px solid black; */
  display: -webkit-flex;
  width: ${percentage};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 3.5rem 0;
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
