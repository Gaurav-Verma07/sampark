'use client';
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
import { useForm } from '@mantine/form';
import { IconArrowLeft } from '@tabler/icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
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

const OrphanageRegister = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const { classes } = useStyles();

  const [staffDetails, setStaffDetails] = useState([]);
  const [donationDetails, setDonationDetails] = useState({
    isDonations: false,
    donationContact: '',
  });
  const [testimonialDetails, setTestimonialDetails] = useState([]);

  const form = useForm({
    initialValues: {
      name: '',
      location: '',
      contactInformation: '',
      vision: '',
      description: '',
      capacity: 0,
      servicesProvided: [],
      startAge: 0,
      endAge: 0,
      logo: '',
      operatingHours: '',
      license: '',
      staffInformation: [],
      donationInformation: {},
      testimonials: [],
    },
  });

  const handleStaffAdd = () => {
    staffDetails.push({ name: '', qualification: '' });
    setStaffDetails([...staffDetails]);
  };
  const handleDonationDetails = (event) => {
    console.log(event.target.checked);
    setDonationDetails((prevValue) => ({
      ...prevValue,
      isDonations: event.target.checked,
    }));
  };

  const handleAddTestimonial = () => {
    testimonialDetails.push({ name: '', testimony: '' });
    setTestimonialDetails([...testimonialDetails]);
  };

  const servicesProvidedOptions = [
    { value: 'Education', label: 'Education' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Nutrition', label: 'Nutrition' },
  ];
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
            // className={classes.back}
            onClick={() => {
              router.push('/');
            }}
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
          Register Your Orphanage:
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
              placeholder="Name"
              label="Orphanage Name"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="location"
              label="Orphanage Location"
            />
            <Textarea
              mt={30}
              mb={30}
              placeholder="Vision"
              label="Orphanage Vision"
            />
            <Textarea
              mt={30}
              mb={30}
              placeholder="Description"
              label="Orphanage Description"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Capacity"
              label="Orphanage Capacity"
              type="number"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="logo"
              label="Orphanage Logo"
            />
          </Stepper.Step>

          <Stepper.Step label="Second step" description="Orphanage Details">
            <TextInput
              mt={30}
              mb={30}
              placeholder="Contact Information"
              label="Contact Information"
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Operating Hours"
              label="Operating Hours"
            />
            <TextInput mt={30} mb={30} placeholder="License" label="License" />
            <MultiSelect
              mt={30}
              mb={30}
              label="Services Provided"
              placeholder="Select services provided"
              data={servicesProvidedOptions}
              value={form.values.servicesProvided}
            />
            <Button
              variant="outline"
              onClick={handleStaffAdd}
              style={{ marginBottom: '10px' }}
            >
              Add Staff Information
            </Button>

            {staffDetails.map((staff, index) => (
              <Group key={index}>
                <TextInput
                  label={`Staff ${index + 1} Name`}
                  value={staff.name}
                />
                <TextInput
                  label={`Staff ${index + 1} Qualification`}
                  value={staff.qualification}
                />
                <Button variant="subtle">Delete</Button>
              </Group>
            ))}
            <Group>
              <TextInput
                mt={30}
                mb={30}
                placeholder="Start-Age"
                label="Start-Age"
                type="number"
              />
              <TextInput
                mt={30}
                mb={30}
                placeholder="End-Age"
                label="End-Age"
                type="number"
              />
            </Group>
            <Group>
              <Checkbox
                mt={30}
                mb={30}
                label="Take Donation"
                onChange={(val) => handleDonationDetails(val)}
              />
              {donationDetails.isDonations && (
                <TextInput
                  label="Donation Contact"
                  // value={staff.name}
                />
              )}
            </Group>
            <Button
              variant="outline"
              onClick={handleAddTestimonial}
              style={{ marginBottom: '10px' }}
            >
              Add Testimonials
            </Button>
            {testimonialDetails.map((staff, index) => (
              <Group key={index}>
                <TextInput
                  label={`Testimony ${index + 1} Name`}
                  // value={staff.name}
                />
                <TextInput
                  label={`Testimony ${index + 1} Testimony`}
                  // value={staff.qualification}
                />
                <Button variant="subtle">Delete</Button>
              </Group>
            ))}
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
          {active == 1 && <Button onClick={registerHandler}>Submit</Button>}
        </Group>
      </Paper>
    </>
  );
};
export default OrphanageRegister;
