import React from "react"
// import { useAuth0 } from "@auth0/auth0-react"

import styled from "styled-components"

const HeaderNav = styled.nav`
  display: flex;
  height: fit-content;
  overflow: hidden;
  flex-direction: ${({ isMobileSize }) => (!isMobileSize ? "none" : "column")};
  width: ${({ isMobileSize }) => (!isMobileSize ? "fit-content" : "100%")};
  max-height: ${({ isMobileSize, mobileNavIsOpen }) =>
    isMobileSize && !mobileNavIsOpen ? "0" : "500px"};
  transition: max-height 0.2s;
`

const HeanderNavList = styled.ul`
  display: flex;
  gap: 10px;
  cursor: default;
  flex-direction: ${({ isMobileSize }) => (!isMobileSize ? "unset" : "column")};
  li {
    transition: box-shadow 0.2s;
    padding: 5px;
    font-size: 12px;
    :hover {
      cursor: pointer;
      box-shadow: 0 0 4px 0 black;
    }
  }
`
export const Nav = ({ isMobileSize = true, mobileNavIsOpen = false }) => {
  return (
    <HeaderNav isMobileSize={isMobileSize} mobileNavIsOpen={mobileNavIsOpen}>
      <HeanderNavList isMobileSize={isMobileSize}>
        <li>For business</li>
        <li>Log in </li>
        <li>About</li>
      </HeanderNavList>
    </HeaderNav>
  )
}
