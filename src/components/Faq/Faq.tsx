import { Container, Title, Accordion } from '@mantine/core';
import '../Faq/Faqstyles.css';
const placeholder = [
  {
    problem:'What is the purpose of this social platform?',
    solution: 'The platform aims to foster meaningful connections between schools and colleges with slums and orphanages to facilitate educational support and engagement, promoting social inclusion and uplifting the underprivileged communities.'
  },
  {
    problem: 'How can I reset my password?',
    solution:
      'To reset password you need to visit login page and press forget password button and then follow given procedure',
  },
  {
    problem: 'Can I create more that one account?',
    solution:
      'No,it is not recommended to hold multiple accounts unless untill you are facing any problem with previous account',
  },
  {
    problem: 'How you help poor kids?',
    solution:
      'We are group of students providing a platform to NGOs and helping them in raising funds which directly goes for poor people',
  },
  {
    problem: 'How many ways are there to donate?',
    solution: "It's very simple,on home page only you can simply donate",
  },
  {
    problem: 'What payment systems do you work with?',
    solution: 'We use various digital payment methods via UPI,debit,credit and Phone wallet',
  },
  {
    problem: 'Are there any safety measures in place for the involvement of students in the slums and orphanages?',
    solution: 'Yes, the platform encourages schools and colleges to ensure proper supervision and follow safety protocols when engaging their students in activities within slums and orphanages.'
  },
  {
    problem:'Can individuals or organizations from different countries participate?',
    solution: 'Absolutely! The platform is open to participants from all around the world, allowing cross-cultural exchange and global collaboration for social causes.'
  },
  
  {
    problem:'How can volunteers get involved?',
    solution: 'Volunteers can join the platform and search for projects or initiatives that match their skills and interests. They can offer their time, expertise, and support to help schools, colleges, slums, and orphanages achieve their objectives.'
  },
  {
    problem:'Is financial assistance a part of this platform\'s offerings?',
    solution: 'While the platform does not directly provide financial aid, schools and colleges can arrange fundraisers or crowdfunding campaigns for specific projects or requirements identified by the slums and orphanages.'
  }
];
export default function Faq() {
  return (
    <Container size="sm" className="wrapper" id="faq">
      <Title align="center" className="title">
        FAQs
      </Title>

      {placeholder.map((item, index) => (
        <Accordion variant="separated" key={index}>
          <Accordion.Item className="item" value="reset-password">
            <Accordion.Control className="item_question">{item.problem}</Accordion.Control>
            <Accordion.Panel className='faq_content' >{item.solution}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ))}
    </Container>
  );
}
