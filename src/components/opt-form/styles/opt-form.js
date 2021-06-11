import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Input = styled.input`
  max-width: 420px;
  width: 100%;
  border: 0;
  height: 64px;
  padding: 8px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    border-radius: 4px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 64px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 16px 32px;
  font-size: 24px;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    height: 48px;
    margin-top: 16px;
    font-weight: bold;
    border-radius: 4px;
  }

  img {
    margin-left: 8px;
    filter: invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`

export const Text = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`
