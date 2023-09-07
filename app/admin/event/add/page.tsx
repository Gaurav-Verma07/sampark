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

  const [registrationDetails, setRegistrationDetails]= useState({isRegistration: false, link: ''})

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

    const handleRegistraitonDetails = (event) => {
    setRegistrationDetails({
      ...registrationDetails,
      isRegistration: event.target.checked,
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
    form.values.activities = JSON.stringify(activityDetails);
    form.values.donations = JSON.stringify(donationDetails);
    form.values.volunteering = JSON.stringify(volunteeringDetails);
    form.values.socialMediaLinks = JSON.stringify(socialMedia);
    form.values.contactInformation = JSON.stringify(contactInfomation);
    form.values.registrationLink=JSON.stringify(registrationDetails)

    console.log('data: ', form.values);

    try {
      const response = await fetch('/api/admin/events/add', {
        method: 'POST',
        body: JSON.stringify({ data: form.values }),
      }).then((res) => res.json());
      console.log(response);
      if (response.success) {
        toast.success('Event data added successfully', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
      } else {
        if (response.errors && response.errors.length > 0) {
          let errorMessage = '';
          for (let i = 0; i < response.errors.length; i++) {
            errorMessage += response.errors[i].msg + ' ';
          }
          toast.error(errorMessage, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          console.log('response false');
          toast.error(response.message, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: false,
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Please Try Again', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
      });
    }
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
              {...form.getInputProps('eventName')}
            />
            <MultiSelect
              mt={30}
              mb={30}
              label="Event Type"
              placeholder="Select event type"
              data={eventTypeOptions}
              value={form.values.eventType}
              onChange={(value) => form.setFieldValue('eventType', JSON.stringify(value))}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Event Date"
              label="Event Date"
              type="date"
              {...form.getInputProps('eventDate')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Event Location"
              label="Event Location"
              {...form.getInputProps('eventLocation')}
            />
            <Textarea
              mt={30}
              mb={30}
              placeholder="Event Description"
              label="Event Description"
              {...form.getInputProps('description')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Organizing Organization"
              label="Organizing Organization"
              {...form.getInputProps('organizingOrganization')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Target Audience"
              label="Target Audience"
              {...form.getInputProps('targetAudience')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Logo"
              label="Event Logo"
              {...form.getInputProps('logo')}
            />
            <Checkbox
              mt={30}
              mb={30}
              
              label="Registration Details"
              onChange={(event) => handleRegistraitonDetails(event)}
            />
            {registrationDetails.isRegistration && (
              <TextInput
                placeholder="Registration Link"
                value={registrationDetails.link}
                onChange={(e) =>
                  setRegistrationDetails({
                    ...registrationDetails,
                    link: e.target.value,
                  })
                }
              />
            )}

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
                  onChange={(e) => {
                    activityDetails[index].name = e.target.value;
                    setActivityDetails([...activityDetails]);
                  }}
                />
                <TextInput
                  label={`Activity ${index + 1} Description`}
                  value={activity.description}
                  onChange={(e) => {
                    activityDetails[index].description = e.target.value;
                    setActivityDetails([...activityDetails]);
                  }}
                />
                <Button variant="subtle">Delete</Button>
              </Group>
            ))}
          </Stepper.Step>

          <Stepper.Step label="Second step" description="NGO Details">
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
                onChange={(e) =>
                  setDonationDetails({
                    ...donationDetails,
                    contact: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setVolunteeringDetails({
                    ...volunteeringDetails,
                    contact: e.target.value,
                  })
                }
              />
            )}

            <TextInput
              label="Phone"
              value={contactInfomation.phone}
              onChange={(e) =>
                setContactInfomation({
                  ...contactInfomation,
                  phone: e.target.value,
                })
              }
            />
            <TextInput
              label="Email"
              value={contactInfomation.email}
              onChange={(e) =>
                setContactInfomation({
                  ...contactInfomation,
                  email: e.target.value,
                })
              }
            />
            <TextInput
              label="Website"
              value={contactInfomation.website}
              onChange={(e) =>
                setContactInfomation({
                  ...contactInfomation,
                  website: e.target.value,
                })
              }
            />
            <TextInput
              label="Twitter"
              value={socialMedia.twitter}
              onChange={(e) =>
                setSocialMedia({ ...socialMedia, twitter: e.target.value })
              }
            />
            <TextInput
              label="LinkedIn"
              value={socialMedia.linkedIn}
              onChange={(e) =>
                setSocialMedia({ ...socialMedia, linkedIn: e.target.value })
              }
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
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />
    </>
  );
};

export default EventRegister;
