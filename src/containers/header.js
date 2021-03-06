import { Header } from '../components'
import * as ROUTES from '../constants/routes'

const HeaderContainer = ({ children }) => (
  <Header>
    <Header.Frame>
      <Header.Logo to={ROUTES.HOME} src="logo.svg" alt="Netflix" />
      <Header.ButtonLink to={ROUTES.SIGN_IN}>
        Sign In
      </Header.ButtonLink>
    </Header.Frame>
    {children}
  </Header>
)

export default HeaderContainer
