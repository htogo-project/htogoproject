import React from "react";
import styled from "styled-components";

import { List } from "../List";

const BodyWrapper = styled.section`
  /* border: 3px solid black; */
  width: 100%;
  display: flex;
  justify-content: space-around;
  .centralizer {
    display: flex;
  }
`

export const Body = () => {
  return (
    <BodyWrapper>
      {/* <div className='centralizer'> */}
        <List />
      {/* </div> */}
    </BodyWrapper>
  )
}
