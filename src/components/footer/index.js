import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer'
import { createComponent } from '../../helpers/createComponent'

const Footer = createComponent(Container)

Footer.Row = createComponent(Row)
Footer.Column = createComponent(Column)
Footer.Link = createComponent(Link)
Footer.Title = createComponent(Title)
Footer.Text = createComponent(Text)
Footer.Break = createComponent(Break)

export default Footer
