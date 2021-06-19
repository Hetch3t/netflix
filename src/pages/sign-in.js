import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SignInForm } from '../components'
import { HeaderContainer, FooterContainer } from '../containers'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'

const SignIn = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { firebase } = useContext(FirebaseContext)

  const handleSignin = async event => {
    event.preventDefault()

    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          history.push(ROUTES.BROWSE)
        })
        .catch(e => {
          setEmail('')
          setPassword('')
          setError(e.message)
        })
    } catch (e) {
      setEmail('')
      setPassword('')
      setError(e.message)
    }
  }
  const isInvalid = password === '' || email === ''

  return (
    <>
      <HeaderContainer bg={false}>
        <SignInForm>
          <SignInForm.Title>Sign In</SignInForm.Title>
          {error && <SignInForm.Error>{error}</SignInForm.Error>}
          <SignInForm.Base onSubmit={handleSignin} method="POST">
            <SignInForm.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <SignInForm.Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <SignInForm.SubmitButton disabled={isInvalid} type="submit">
              Sign In
            </SignInForm.SubmitButton>
          </SignInForm.Base>

          <SignInForm.Text>
            New to Netflix?{' '}
            <SignInForm.Link to={ROUTES.SIGN_UP}>Sign up now</SignInForm.Link>
            <SignInForm.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
            </SignInForm.TextSmall>
          </SignInForm.Text>
        </SignInForm>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default SignIn
