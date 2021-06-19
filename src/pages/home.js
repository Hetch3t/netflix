import { OptForm, Feature } from '../components'
import {
  JumbotronContainer,
  FooterContainer,
  FaqsContainer,
  HeaderContainer
} from '../containers'

const Home = () => (
  <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Get Started</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email above to create an account!
          </OptForm.Text>
        </OptForm>
      </Feature>
    </HeaderContainer>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
  </>
)

export default Home
