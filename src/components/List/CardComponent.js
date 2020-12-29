import styled from "styled-components"

const CardContainer = styled.div``
const CardImgSide = styled.div``
const CardDescriptionSide = styled.div``

export const CardComponent = () => {
  return (
    <CardContainer>
      <CardImgSide>
        <img src='' alt='' />
      </CardImgSide>
      <CardDescriptionSide>
        <a href='#'>Adel's Restaurant Eureka</a>
      </CardDescriptionSide>
    </CardContainer>
  )
}
