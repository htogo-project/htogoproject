import React from "react";
import styled from "styled-components";

const MainModalSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
`
const MainModalBG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`
const MainModalWrapper = styled.div`
  padding: 20px;
  min-width: 100px;
  min-height: 50px;
  background: white;
  z-index: 1001;
  box-sizing: border-box;
  box-shadow: 2px 3px 2px 0 black;
`
const MainModalCloseButton = styled.div`
  margin-left: auto;
  width: 25px;
  height: 25px;
  display: flex;
  justify-self: flex-end !important;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    ::before,
    ::after {
      box-shadow: 0 0 3px 0 black;
    }
  }
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: black;
  }
  ::before {
    transform: rotate(-45deg);
  }
  ::after {
    transform: rotate(45deg);
  }
`
export const MainModal = ({ children, modalState = false }) => {
  const closeButtonFunction = () => modalState && modalState(false)

  return (
    <MainModalSection>
      <MainModalBG />
      <MainModalWrapper>
        <MainModalCloseButton onClick={closeButtonFunction} />
        {children}
      </MainModalWrapper>
    </MainModalSection>
  )
}
