import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import { Home, SignIn, SignUp } from './routes'

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
      <Route exact path={ROUTES.BROWSE}></Route>
    </Router>
  )
}

export default App
