import { createComponent } from '../../helpers/createComponent'
import { Container, Title, Subtitle } from './styles/feature'

const Feature = createComponent(Container)

Feature.Title = createComponent(Title)

Feature.Subtitle = createComponent(Subtitle)

export default Feature
