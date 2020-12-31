import React from "react"
import styled from "styled-components"

import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai"

const ButtonContent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  span {
    display: none;
    position: absolute;
    width: 300px;
    font-size: 1.2rem;
    text-align: center;
    bottom: 120%;
    background: white;
    box-shadow: 0 0 5px 0 black;
    transition: display 0.2s;
  }
  :hover {
    cursor: ${({ cursor }) => cursor};
    span {
      display: unset;
    }
  }
`
export const ClaimButton = () => {
  return (
    <ButtonContent>
      <AiOutlineCheckCircle color={"green"} size='2rem' />
    </ButtonContent>
  )
}
export const ClaimedButton = () => {
  const buttonMessage = `Do you own this company? Create a profile and verify the company information`
  return (
    <ButtonContent cursor={"pointer"}>
      <span>{buttonMessage}</span>
      <AiOutlineExclamationCircle color={"red"} size='2rem' />
    </ButtonContent>
  )
}
