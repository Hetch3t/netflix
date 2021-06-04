import {
  Container,
  Inner,
  Item,
  Pane,
  Title,
  Subtitle,
  Image,
} from './styles/jumbotron'
import {
  createComponent,
  createComponentChildfree,
} from '../../helpers/createComponent'

const Jumbotron = ({ children, direction = 'row' }) => (
  <Item>
    <Inner direction={direction}>{children}</Inner>
  </Item>
)

Jumbotron.Container = createComponent(Container)
Jumbotron.Pane = createComponent(Pane)
Jumbotron.Title = createComponent(Title)
Jumbotron.Subtitle = createComponent(Subtitle)
Jumbotron.Image = createComponentChildfree(Image)

export default Jumbotron
