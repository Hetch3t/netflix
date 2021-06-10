import {
  createComponent,
  createComponentChildfree,
} from '../../helpers/createComponent'
import { Container, Text, Input, Button, Break } from './styles/opt-form'

const OptForm = createComponent(Container)

OptForm.Input = createComponentChildfree(Input)

OptForm.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>
    {children}
    <img src="/images/icons/chevron-right.png" alt="Try Now" />
  </Button>
)

OptForm.Text = createComponent(Text)

OptForm.Break = createComponentChildfree(Break)

export default OptForm
