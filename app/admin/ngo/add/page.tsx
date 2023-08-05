'use client';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  Code,
  Container,
  Group,
  Header,
  Paper,
  Textarea,
  Stepper,
  Text,
  TextInput,
  createStyles,
  Checkbox,
  MultiSelect,
} from '@mantine/core';
import { useState } from 'react';
// import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import { IconArrowLeft } from '@tabler/icons';
import { useForm } from '@mantine/form';
import React from 'react';

const useStyles = createStyles(() => {
  return {
    main: {
      margin: '8% auto',
      width: '50%',
      display: '-ms-flexbox',
      alignItems: 'center',
      justifyContent: 'center',
      [`@media (max-width: 800px)`]: {
        width: '90%',
      },
    },
  };
});

const NGORegister = () => {
  // const router = useRouter();
  const [active, setActive] = useState(0);
  const { classes } = useStyles();

  const [projectInformation, setProjectInformation] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [donationDetails, setDonationDetails] = useState({
    isDonations: false,
    contact: '',
  });
  const [volunteeringDetails, setVolunteeringDetails] = useState({
    isVolunteer: false,
    contact: '',
  });
  const [testimonialDetails, setTestimonialDetails] = useState([]);

  const form = useForm({
    initialValues: {
      name: '',
      location: '',
      contactInformation: {}, //phone,website,email
      vision: '',
      focusAreas: [], //dropdown
      projects: [], //name,description
      teamMembers: [], //name,designation
      donations: {}, //isDonations: Boolean, contact: String
      volunteering: {}, //isVolunteer: Boolean, contact: String
      logo: '',
      testimonials: [], //name: String, testimony: String
      socialMediaLinks: {}, //{name:String,link:String}
      license: '',
      funding: '',
    },
  });

  const focusAreaOptions = [
    { value: 'Education', label: 'Education' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Nutrition', label: 'Nutrition' },
  ];

  const handleProjectAdd = () => {
    setProjectInformation([
      ...projectInformation,
      { name: '', description: '' },
    ]);
  };

  const handleTeamMemberAdd = () => {
    setTeamMembers([...teamMembers, { name: '', designation: '' }]);
  };

  const handleDonationDetails = (event) => {
    setDonationDetails({
      ...donationDetails,
      isDonations: event.target.checked,
    });
  };

  const handleVolunteeringDetails = (event) => {
    setVolunteeringDetails({
      ...volunteeringDetails,
      isVolunteer: event.target.checked,
    });
  };

  const handleAddTestimonial = () => {
    setTestimonialDetails([...testimonialDetails, { name: '', testimony: '' }]);
  };

  const nextStep = () => {
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });
  };

  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  const registerHandler = async () => {
    console.log('data: ', form.values);
  };

  const box1 = {
    boxShadow:
      ' rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
  };

  return (
    <div>
      <Header height={100}>
        <Container>
          <Button
            my={20}
            // className={classes.back}
            // onClick={() => {
            //   router.push('/');
            // }}
          >
            {' '}
            <IconArrowLeft /> Go Back
          </Button>
        </Container>
      </Header>

      <Paper
        style={box1}
        className={classes.main}
        radius="md"
        p="xl"
        withBorder
      >
        <Text color="teal" align="center" pb={30} fz={38} fw={600}>
          Register Your Ngo:
        </Text>
        <Stepper active={active} breakpoint="sm">
          <Stepper.Step
            mt={20}
            label="First step"
            description="Profile settings"
          >
            <TextInput
              mt={30}
              mb={30}
              placeholder="NGO Name"
              label="NGO Name"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Location"
              label="Location"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Phone No"
              label="Phone No"
              type="number"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Email"
              label="email"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Website"
              label="website"
            />
            <Textarea
              mt={30}
              mb={30}
              placeholder="Vision"
              label="NGO Vision"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Logo"
              label="NGO Logo"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="License"
              label="License"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Funding"
              label="Funding"
            />
            <MultiSelect
              mt={30}
              mb={30}
              label="Focus Area"
              placeholder="Select services provided"
              data={focusAreaOptions}
              value={form.values.focusAreas}
            />
            <Button
              variant="outline"
              onClick={handleProjectAdd}
              style={{ marginBottom: '10px' }}
            >
              Add Projects
            </Button>
            {projectInformation.map((member, index) => (
              <Group key={index}>
                <TextInput
                  label={`Project ${index + 1} Name`}
                />
                <TextInput
                  label={`Project ${index + 1} Description`}
                />
                <Button variant="subtle">Delete</Button>
              </Group>
            ))}
          </Stepper.Step>

          <Stepper.Step label="Second step" description="NGO Details">
            <Button
              variant="outline"
              onClick={handleTeamMemberAdd}
              style={{ marginBottom: '10px' }}
            >
              Add Team Member
            </Button>
            {teamMembers.map((member, index) => (
              <Group key={index}>
                <TextInput
                  label={`Team Member ${index + 1} Name`}
                  value={member.name}
                />
                <TextInput
                  label={`Team Member ${index + 1} Designation`}
                  value={member.designation}
                />
                <Button variant="subtle">Delete</Button>
              </Group>
            ))}
            <Button
              variant="outline"
              onClick={handleAddTestimonial}
              style={{ marginBottom: '10px' }}
            >
              Add Testimonial
            </Button>
            {testimonialDetails.map((testimonial, index) => (
              <Group key={index}>
                <TextInput
                  label={`Testimonial ${index + 1} Name`}
                  value={testimonial.name}
                />
                <TextInput
                  label={`Testimonial ${index + 1} Testimony`}
                  value={testimonial.testimony}
                />
                <Button variant="subtle">Delete</Button>
              </Group>
            ))}

            <Checkbox
              mt={30}
              mb={30}
              label="Accept Donations"
              onChange={(event) => handleDonationDetails(event)}
            />
            {donationDetails.isDonations && (
              <TextInput
                label="Donation Contact"
                value={donationDetails.contact}
              />
            )}

            <Checkbox
              mt={30}
              mb={30}
              label="Accept Volunteers"
              onChange={(event) => handleVolunteeringDetails(event)}
            />
            {volunteeringDetails.isVolunteer && (
              <TextInput
                label="Volunteering Contact"
                value={volunteeringDetails.contact}
              />
            )}
            <TextInput
              label="Twitter"
            />
            <TextInput
              label="LinkedIn"
            />
          </Stepper.Step>

          <Stepper.Completed>
            Completed! Form values:
            <Code block mt="xl">
              {JSON.stringify(form.values, null, 2)}
            </Code>
          </Stepper.Completed>
        </Stepper>

        <Group position="right" mt="xl">
          {active !== 0 && active !== 3 && (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active !== 1 && <Button onClick={nextStep}>Next step</Button>}
          {active === 1 && <Button onClick={registerHandler}>Submit</Button>}
        </Group>
      </Paper>
    </div>
  );
};

export default NGORegister;