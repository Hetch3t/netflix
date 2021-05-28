import styled from 'styled-components/macro'

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 48px 5%;
  color: white;
  overflow: hidden;
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 48px;
    text-align: center;
  }
`

export const Title = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media screen and (max-width: 600px) {
    font-size: 36px;
  }
`

export const Subtitle = styled.h2`
  font-size: 28px;
  font-weight: normal;
  line-height: normal;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

export const Container = styled.div`
  @media screen and (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 48px;
    }
  }
`
