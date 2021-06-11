import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Background = styled.div`
  display: flex;
  background: url(${({ src }) =>      src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
    top left / cover no-repeat;
  flex-direction: column;
  min-height: 600px;

  @media (orientation: landscape) {
    height: 100vh;
  }
`

export const Container = styled.div`
  display: flex;
  margin: 24px 48px;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  position: sticky;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 16px 32px;
  }
`

export const Logo = styled.img`
  height: 48px;
  width: auto;
  margin-right: 48px;

  @media (max-width: 1000px) {
    height: 32px;
  }
`

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 16px;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;

  &:hover {
    background-color: #f40612;
  }
`
