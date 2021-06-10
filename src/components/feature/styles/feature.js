import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  width: 100%;
  color: white;
  flex-direction: column;
  text-align: center;
  padding: 120px 0;
`
export const Title = styled.h1`
  max-width: 640px;
  font-size: 48px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 36px;
  }
`
export const Subtitle = styled.h2`
  max-width: 640px;
  font-size: 32px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`
