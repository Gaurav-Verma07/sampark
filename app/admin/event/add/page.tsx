'use client';
import { useState } from 'react';
// import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
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
  Code,
} from '@mantine/core';
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

const EventRegister = () => {
  // const router = useRouter();
  const [active, setActive] = useState(0);
  const { classes } = useStyles();

  const [contactInfomation, setContactInfomation] = useState({
    phone: '',
    website: '',
    email: '',
  });

  const [activityDetails, setActivityDetails] = useState([]);
  const [donationDetails, setDonationDetails] = useState({
    isDonations: false,
    contact: '',
  });
  const [volunteeringDetails, setVolunteeringDetails] = useState({
    isVolunteer: false,
    contact: '',
  });
  const [socialMedia, setSocialMedia] = useState({ twitter: '', linkedIn: '' });

  const form = useForm({
    initialValues: {
      eventName: '',
      eventType: '',
      eventDate: '',
      eventLocation: '',
      description: '',
      organizingOrganization: '',
      targetAudience: '',
      activities: [], // name, description
      volunteering: {}, // isVolunteer: Boolean, contact: String
      donations: {}, // isDonations: Boolean, contact: String
      logo: '',
      contactInformation: {}, // phone, website, email
      socialMediaLinks: {}, // twitter, linkedIn
      registrationLink: {}, // isregistration: Boolean, link: String
    },
  });

  const eventTypeOptions = [
    { value: 'Conference', label: 'Conference' },
    { value: 'Workshop', label: 'Workshop' },
    { value: 'Seminar', label: 'Seminar' },
  ];

  const handleActivityAdd = () => {
    setActivityDetails([...activityDetails, { name: '', description: '' }]);
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
    <>
      <Header height={100}>
        <Container>
          <Button
            my={20}
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
          Register Your Event:
        </Text>
        <Stepper active={active} breakpoint="sm">
          <Stepper.Step mt={20} label="First step" description="Event details">
            <TextInput
              mt={30}
              mb={30}
              placeholder="Event Name"
              label="Event Name"
            />
            <MultiSelect
              mt={30}
              mb={30}
              label="Event Type"
              placeholder="Select event type"
              data={eventTypeOptions}
              value={form.values.eventType}
              onChange={(value) => form.setFieldValue('eventType', value)}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Event Date"
              label="Event Date"
              type="date"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Event Location"
              label="Event Location"
            />
            <Textarea
              mt={30}
              mb={30}
              placeholder="Event Description"
              label="Event Description"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Organizing Organization"
              label="Organizing Organization"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Target Audience"
              label="Target Audience"
            />
            <TextInput mt={30} mb={30} placeholder="Logo" label="Event Logo" />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Registration Link"
              label="Registration Link"
            />

            <Button
              variant="outline"
              onClick={handleActivityAdd}
              style={{ marginBottom: '10px' }}
            >
              Add Activities
            </Button>
            {activityDetails.map((activity, index) => (
              <Group key={index}>
                <TextInput
                  label={`Activity ${index + 1} Name`}
                  value={activity.name}
                />
                <TextInput
                  label={`Activity ${index + 1} Description`}
                  value={activity.description}
                />
                <Button variant="subtle">Delete</Button>
              </Group>
            ))}
          </Stepper.Step>

          <Stepper.Step label="Second step" description="Event Contacts">
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

            <TextInput label="Phone" value={contactInfomation.phone} />
            <TextInput label="Email" value={contactInfomation.email} />
            <TextInput label="Website" value={contactInfomation.website} />
            <TextInput label="Twitter" value={socialMedia.twitter} />
            <TextInput label="LinkedIn" value={socialMedia.linkedIn} />
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
    </>
  );
};

export default EventRegister;
