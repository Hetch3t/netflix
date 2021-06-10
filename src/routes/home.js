import { OptForm, Feature } from '../components'
import {
  JumbotronContainer,
  FooterContainer,
  FaqsContainer,
  HeaderContainer,
} from '../containers'

const Home = () => (
  <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>
          Unlimited films, TV programmes, series and more.
        </Feature.Title>
        <Feature.Subtitle>Watch anywhere. Cancel at anytime.</Feature.Subtitle>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now!</OptForm.Button>
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
    {/* </HeaderContainer> */}
  </>
)

export default Home
