import React, { useState, useEffect, useCallback, useRef } from "react"
import styled from "styled-components"

import Logo from "../../images/htogo.png"

// components
import { Search } from "../Search/Search"
import { Nav } from "../Nav"
import { UserView } from "../UserView"

const MainHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  background: white;
  width: 100vw;
  padding-bottom: 2rem;
  box-sizing: border-box;
`
const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
const LogoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  width: ${({ isMobileSize }) => (!isMobileSize ? "fit-content" : "100%")};
  span {
    display: ${({ isMobileSize }) => (!isMobileSize ? "none" : "unset")};
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

  // const setInvisibleHeaderHeight = useCallback(() => {
  //   setHeaderHeight(headerElement.current.offsetHeight)
  // }, [setHeaderHeight])

  // useEffect(() => {
  //   setInvisibleHeaderHeight()
  // }, [setInvisibleHeaderHeight])

  const resizeFunction = useCallback(() => {
    window.addEventListener("resize", () => {
      const atualWindowSize = window.innerWidth
      if (atualWindowSize <= maxWidthToResize && isMobileSize !== true) {
        setIsMobileSize(true)
      } else if (atualWindowSize > maxWidthToResize && isMobileSize !== false) {
        setIsMobileSize(false)
      }
    })
    setHeaderHeight(headerElement.current.offsetHeight)
    setMobileNavIsOpen(false)
  }, [isMobileSize, setIsMobileSize, setHeaderHeight])

  useEffect(() => {
    resizeFunction()
  }, [resizeFunction])

  return (
    <>
      <MainHeader ref={headerElement}>
        <div className='centralizer'>
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
        </div>
      </MainHeader>
      <InvisbleHeader headerHeight={headerHeight} />
    </>
  )
}
