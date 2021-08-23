import React from "react";

import styled from "styled-components";

const HeaderNav = styled.nav`
  display: flex;
  height: fit-content;
  overflow: hidden;
  /* border: 2px solid purple; */
  flex-direction: ${({ isMobileSize }) => (!isMobileSize ? "none" : "column")};
  width: ${({ isMobileSize }) => (!isMobileSize ? "10%" : "100%")};
  max-height: ${({ isMobileSize, mobileNavIsOpen }) =>
    isMobileSize && !mobileNavIsOpen ? "0" : "500px"};
  transition: max-height 0.2s;
`

const HeanderNavList = styled.ul`
  display: flex;
  justify-content: space-around;
  cursor: default;
  /* margin:auto; */
  width:  ${({ isMobileSize }) => (!isMobileSize ? "100%" : "60%")};
  flex-direction: ${({ isMobileSize }) => (!isMobileSize ? "unset" : "row")};
  li {
    transition: box-shadow 0.2s;
    font-size: 16px;
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
