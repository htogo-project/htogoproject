import React, { useState, useEffect, useCallback, useRef } from "react"
import styled from "styled-components"

import Logo from "../../images/htogo.png"

// components
import { Search } from "../Search/Search"
import { Nav } from "../Nav"
import { UserView } from "../UserView"

const MainHeader = styled.header`
  position: fixed;
  background: white;
  width: 100%;
  box-sizing: border-box;
  /* border: 2px solid orange; */
  z-index: 500;
  margin-bottom: 30px;
`
const HeaderWrapper = styled.div`
  /* height: 60%; */
  /* border: 2px solid green; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
  align-items: center;
`
const LogoContent = styled.div`
  display: flex;
  /* gap: 20px; */
  justify-content: space-between;
  /* border: 3px solid green; */
  width: ${({ isMobileSize }) => (!isMobileSize ? "fit-content" : "100%")};
  span {
    display: ${({ isMobileSize }) => (!isMobileSize ? "none" : "unset")};
    font-size: 22px;
  }
`
const InvisbleHeader = styled.div`
  width: 100%;
  height: ${({ headerHeight }) => headerHeight + "px"};
`

export const Header = () => {
  const maxWidthToResize = "650"
  const headerElement = useRef()
  const [headerHeight, setHeaderHeight] = useState()
  const [isMobileSize, setIsMobileSize] = useState(() => {
    const atualWindowSize = window.innerWidth
    return atualWindowSize <= maxWidthToResize
  })
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

  const resizeFunction = useCallback(() => {
    window.addEventListener("resize", () => {
      const atualWindowSize = window.innerWidth
      if (atualWindowSize <= maxWidthToResize && isMobileSize !== true) {
        setIsMobileSize(true)
      } else if (atualWindowSize > maxWidthToResize && isMobileSize !== false) {
        setIsMobileSize(false)
      }
      setHeaderHeight(headerElement.current.offsetHeight - 100)
    })
    setMobileNavIsOpen(false)
  }, [isMobileSize, setIsMobileSize, setHeaderHeight])

  useEffect(() => {
    setHeaderHeight(headerElement.current.offsetHeight)
  }, [])
  useEffect(() => {
    resizeFunction()
  }, [resizeFunction])

  return (
    <>
      <MainHeader ref={headerElement}>
          <HeaderWrapper isMobileSize={isMobileSize}>
            <LogoContent isMobileSize={isMobileSize}>
              <img src={Logo} alt='' />
              <span onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}>
                &#9776;
              </span>
            </LogoContent>
            <Search />
            <Nav
              isMobileSize={isMobileSize}
              mobileNavIsOpen={mobileNavIsOpen}
            />
          </HeaderWrapper>
          <UserView />
      </MainHeader>
      <InvisbleHeader headerHeight={headerHeight} />
    </>
  )
}
