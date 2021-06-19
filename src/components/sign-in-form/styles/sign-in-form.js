import styled from 'styled-components/macro'

import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* min-height: 20px; */
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  margin: 100px auto 100px auto;
  padding: 64px;

  @media (max-height: 700px) {
    margin: auto;
  }
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 0 16px;
  color: white;
  padding: 16px 24px;
`

export const Title = styled.h1`
  color: white;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
  margin-top: 0;
`
export const Text = styled.div`
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 500;
`

export const TextSmall = styled.p`
  margin-top: 24px;
  margin-bottom: 0%;
  color: #737373;
  font-size: 12px;
  line-height: normal;
`

export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  height: 48px;
  border-radius: 4px;
  color: white;
  outline: none;
  margin: 8px 0;
  padding: 0px 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #e50916;
  }
`

export const SubmitButton = styled.button`
  height: 48px;
  background: #e50916;
  border: none;
  border-radius: 4px;
  margin: 24px auto;
  color: white;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s ease;
  margin: 24px 0 36px;
  outline: none;

  &:hover,
  &:focus {
    box-shadow: 0 0 16px #e50916;
  }

  &:disabled {
    background: grey;
    opacity: 0.5;
    cursor: default;
    box-shadow: none;
  }
`
