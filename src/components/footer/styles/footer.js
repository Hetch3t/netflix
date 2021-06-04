import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  padding: 64px 56px;
  margin: auto;
  max-width: 1024px;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    padding: 64px 28px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
  }
`

export const Link = styled.a`
  color: #777;
  margin-bottom: 16px;
  font-size: 14px;
  text-decoration: none;
`

export const Title = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 36px;
`

export const Text = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 36px;
  text-align: right;
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`
