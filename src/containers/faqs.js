import { Accordion, OptForm } from '../components'
import faqData from '../fixtures/faqs.json'

const FaqsContainer = () => (
  <Accordion>
    <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    {faqData.map(faqItem => (
      <Accordion.Item key={faqItem.id}>
        <Accordion.Header>{faqItem.header}</Accordion.Header>
        <Accordion.Body>{faqItem.body}</Accordion.Body>
      </Accordion.Item>
    ))}
    <OptForm>
      <OptForm.Input placeholder="Email address" />
      <OptForm.Button>Try it now!</OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>
        Ready to watch? Enter your email above to create an account!
      </OptForm.Text>
    </OptForm>
  </Accordion>
)

export default FaqsContainer
