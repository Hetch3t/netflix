import styled from 'styled-components/macro'

export const Body = styled.div`
  max-height: 1200px;
  transition: all 0.5s ease-in;
  font-size: 24px;
  line-height: normal;
  background: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }
`

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`

export const Inner = styled.div`
  display: flex;
  padding: 64px 48px;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
`

export const Title = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  margin: 0 auto;
  color: white;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 1;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  font-size: 24px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: invert(1);
    width: 24px;

    @media screen and (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const Item = styled.div`
  color: white;
  margin-bottom: 12px;
  max-width: 644px;

  &:first-of-type {
    margin-top: 3em;
  }
`
