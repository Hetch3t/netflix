import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  text-align: center;
  margin: auto 24px;
`
export const Title = styled.h1`
  max-width: 640px;
  font-size: 64px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 1000px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`
export const Subtitle = styled.h2`
  max-width: 640px;
  font-size: 24px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`
