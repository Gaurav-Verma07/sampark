import { Container, Title, Accordion}from '@mantine/core';
import "../Faq/Faqstyles.css";
const placeholder =
[  
  {  
   problem:"How can I reset my password?",   
  solution:"To reset password you need to visit login page and press forget password button and then follow given procedure", 
},
  {
    problem:"Can I create more that one account?",
    solution: "No,it is not recommended to hold multiple accounts unless untill you are facing any problem with previous account",
  }, 
  {
    problem: "How you help poor kids?",
    solution: "We are group of students providing a platform to NGOs and helping them in raising funds which directly goes for poor people",
  }, 
  {
    problem:"How many ways are there to donate?",
    solution:"It's very simple,on home page only you can simply donate",
    
  }, 
  {
    problem:"What payment systems do you work with?",
    solution: "We use various digital payment methods via UPI,debit,credit and Phone wallet",
  }, 
];
  export default function Faq() {
  return (
    <Container size="sm" className="wrapper" id='faq'>
      <Title align="center" className="title">
        Frequently Asked Questions
      </Title>

       {placeholder.map((item)=>
      <Accordion variant="separated">
        <Accordion.Item className="item" value="reset-password">
          <Accordion.Control>{item.problem}</Accordion.Control>
          <Accordion.Panel>{item.solution}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
       )}
    </Container>
  );
}