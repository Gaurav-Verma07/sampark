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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    console.log(staffDetails, testimonialDetails, donationDetails);
    form.values.staffInformation = staffDetails;
    form.values.testimonials = testimonialDetails;
    form.values.donationInformation = donationDetails;
    console.log('data: ', form.values);
    try {
      const response = await fetch('/api/admin/orphanage/add', {
        method: 'POST',
        body: JSON.stringify({ data: form.values }),
      }).then((res) => res.json());
      console.log(response);
      if (response.success) {
        toast.success('Orpanage data added successfully', {
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
            errorMessage += i + 1 + '. ' + response.errors[i].msg + '\n';
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
              {...form.getInputProps('name')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="location"
              label="Orphanage Location"
              {...form.getInputProps('location')}
            />
            <Textarea
              mt={30}
              mb={30}
              placeholder="Vision"
              label="Orphanage Vision"
              {...form.getInputProps('vision')}
            />
            <Textarea
              mt={30}
              mb={30}
              placeholder="Description"
              label="Orphanage Description"
              {...form.getInputProps('description')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Capacity"
              label="Orphanage Capacity"
              type="number"
              {...form.getInputProps('capacity')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="logo"
              label="Orphanage Logo"
              {...form.getInputProps('logo')}
            />
          </Stepper.Step>

          <Stepper.Step label="Second step" description="Orphanage Details">
            <TextInput
              mt={30}
              mb={30}
              placeholder="Contact Information"
              label="Contact Information"
              {...form.getInputProps('contactInformation')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Operating Hours"
              label="Operating Hours"
              {...form.getInputProps('operatingHours')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="License"
              label="License"
              {...form.getInputProps('license')}
            />
            <MultiSelect
              mt={30}
              mb={30}
              label="Services Provided"
              placeholder="Select services provided"
              data={servicesProvidedOptions}
              value={form.values.servicesProvided}
              onChange={(value) =>
                form.setFieldValue('servicesProvided', value)
              }
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
                  onChange={(e) => {
                    staffDetails[index].name = e.target.value;
                    setStaffDetails([...staffDetails]);
                  }}
                />
                <TextInput
                  label={`Staff ${index + 1} Qualification`}
                  value={staff.qualification}
                  onChange={(e) => {
                    staffDetails[index].qualification = e.target.value;
                    setStaffDetails([...staffDetails]);
                  }}
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
                {...form.getInputProps('startAge')}
              />
              <TextInput
                mt={30}
                mb={30}
                placeholder="End-Age"
                label="End-Age"
                type="number"
                {...form.getInputProps('endAge')}
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
                  onChange={(e) => {
                    donationDetails.donationContact = e.target.value;
                    setDonationDetails({ ...donationDetails });
                  }}
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
                  onChange={(e) => {
                    testimonialDetails[index].name = e.target.value;
                    setTestimonialDetails([...testimonialDetails]);
                  }}
                />
                <TextInput
                  label={`Testimony ${index + 1} Testimony`}
                  // value={staff.qualification}
                  onChange={(e) => {
                    testimonialDetails[index].testimony = e.target.value;
                    setTestimonialDetails([...testimonialDetails]);
                  }}
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
export default OrphanageRegister;
