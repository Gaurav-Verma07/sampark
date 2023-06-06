import { Container, Title, Accordion}from '@mantine/core';
import "../Faq/Faqstyles.css";
const placeholder =
  [
   "To reset password you need to visit login page and press forget password button and then follow given procedure",
   "No,it is not recommended to hold multiple accounts unless untill you are facing any problem with previous account",
   "We are group of students providing a platform to NGOs and helping them in raising funds which directly goes for poor people",
   "It's very simple,on home page only you can simply donate",
   "We use various digital payment methods via UPI,debit,credit and Phone wallet",
  ]
export default function Faq() {
  return (
    <Container size="sm" className="wrapper" id='faq'>
      <Title align="center" className="title">
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className="item" value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>{placeholder[0]}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="item" value="another-account">
          <Accordion.Control>Can I create more that one account?</Accordion.Control>
          <Accordion.Panel>{placeholder[1]}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="item" value="newsletter">
          <Accordion.Control>How you help poor kids?</Accordion.Control>
          <Accordion.Panel>{placeholder[2]}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="item" value="credit-card">
          <Accordion.Control>How many ways are there to donate?</Accordion.Control>
          <Accordion.Panel>{placeholder[3]}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="item" value="payment">
          <Accordion.Control>What payment systems do you work with?</Accordion.Control>
          <Accordion.Panel>{placeholder[4]}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}