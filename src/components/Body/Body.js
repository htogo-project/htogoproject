import React from "react"
import styled from "styled-components"

// components
import { List } from "../List"

const BodyWrapper = styled.section`
  width: 100vw;
  .centralizer {
    display: flex;
  }
`

export const Body = () => {
  return (
    <BodyWrapper>
      <div className='centralizer'>
        <List />
      </div>
    </BodyWrapper>
  )
}
