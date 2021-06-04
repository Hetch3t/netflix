import { Accordion } from '../components'
import faqData from '../fixtures/faqs.json'

const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqData.map(faqItem => (
        <Accordion.Item key={faqItem.id}>
          <Accordion.Header>{faqItem.header}</Accordion.Header>
          <Accordion.Body>{faqItem.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

export default FaqsContainer
