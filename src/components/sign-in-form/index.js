import { createComponent } from '../../helpers/createComponent'
import {
  Container,
  Error,
  Title,
  Base,
  Text,
  TextSmall,
  Link,
  SubmitButton,
  Input,
} from './styles/sign-in-form'

const SignInForm = createComponent(Container)

SignInForm.Base = createComponent(Base)

SignInForm.Error = createComponent(Error)

SignInForm.Text = createComponent(Text)

SignInForm.Title = createComponent(Title)

SignInForm.Link = createComponent(Link)

SignInForm.TextSmall = createComponent(TextSmall)

SignInForm.Input = createComponent(Input)

SignInForm.SubmitButton = createComponent(SubmitButton)

export default SignInForm
