import { Link as ReactRouterLink } from 'react-router-dom'

import { createComponent } from '../../helpers/createComponent'
import { Container, Background, ButtonLink, Logo } from './styles/header'

const Header = ({ bg = true, children, ...restProps }) =>
  bg ? <Background {...restProps}>{children}</Background> : children

Header.Frame = createComponent(Container)

Header.Logo = ({ to, ...restProps }) => (
  <ReactRouterLink to={to}>
    <Logo {...restProps} />
  </ReactRouterLink>
)

Header.ButtonLink = createComponent(ButtonLink)

export default Header
