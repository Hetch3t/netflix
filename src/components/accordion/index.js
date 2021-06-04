import { createContext, useState, useContext } from 'react'
import { createComponent } from '../../helpers/createComponent'
import {
  Body,
  Container,
  Inner,
  Title,
  Item,
  Header,
} from './styles/accordion'

const ToggleContext = createContext()

const Accordion = ({ children, ...restProps }) => (
  <Container {...restProps}>
    <Inner>{children}</Inner>
  </Container>
)

Accordion.Title = createComponent(Title)

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false)

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)
  return (
    <Header onClick={() => setToggleShow(toggle => !toggle)}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Add" />
      )}
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext)

  return toggleShow ? <Body {...restProps}>{children}</Body> : null
}

export default Accordion
