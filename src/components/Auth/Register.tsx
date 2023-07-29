import {
  Button,
  Code,
  Container,
  Group,
  Header,
  Paper,
  PasswordInput,
  Stepper,
  Text,
  TextInput,
  createStyles,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowLeft } from '@tabler/icons';
import { child, get, getDatabase, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUserHandler } from '../../utils/ApiRequests/firebaseAuth';
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

const Register = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: '',
      password: '',
      confirmPassword: '',
      email: '',
      currentCity: '',
      address: '',
      whatsappNumber: '',
      collegeName: '',
      inspiration: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          name:
            values.name.trim().length < 6
              ? 'Username must include at least 6 characters'
              : null,
          password:
            values.password.length < 6
              ? 'Password must include at least 6 characters'
              : null,
          confirmPassword:
            values.password !== values.confirmPassword
              ? 'Passwords do not match'
              : null,
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }
      if (active === 1) {
        return {
          currentCity:
            values.currentCity.trim().length < 0
              ? 'Please provide your current city name'
              : null,
          address:
            values.currentCity.trim().length < 5
              ? 'Username must include at least 5 characters'
              : null,
          whatsappNumber:
            values.whatsappNumber.length < 10
              ? 'Invalid whatsapp Number'
              : null,
          collegeName:
            values.collegeName.trim().length < 0
              ? 'Please provide your college name'
              : null,
        };
      }
      return {};
    },
  });

  // const getResponses = async () => {
  //   const dbRef = ref(getDatabase());
  //   const response = await get(
  //     child(
  //       dbRef,
  //       `/1MN-kjuUq3k-jp6g-2L1maBkUsB9AggqbYUcgoB1GoH4/Form responses 1`,
  //     ),
  //   );
  //   const responseData = response.val();
  // };

  // useEffect(() => {
  //   getResponses();
  // }, []);

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
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(form.values),
      }).then((res) => res.json());

      if (response.success) {
        toast.success(response.message, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
        router.push('provider/home');
      }
      if (response.errors && response.errors.length > 0) {
        const errorMessage = response.errors[0].msg;
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
        toast.error(response.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Try again', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    // registerUserHandler(form.values.email, form.values.password);
    // console.log(form.values);
    // localStorage.setItem('email', JSON.stringify(form.values.email));
    // router.push(`/provider/home`);
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
          Register Here:
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
              {...form.getInputProps('name')}
            />
            <PasswordInput
              mt={30}
              mb={30}
              placeholder="Password"
              {...form.getInputProps('password')}
            />
            <PasswordInput
              mt={30}
              mb={30}
              placeholder="Confirm Password"
              {...form.getInputProps('confirmPassword')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Email"
              {...form.getInputProps('email')}
            />
          </Stepper.Step>

          <Stepper.Step label="Second step" description="Personal information">
            <TextInput
              mt={30}
              mb={30}
              placeholder="City you're currently residing in?"
              {...form.getInputProps('currentCity')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Your Address"
              {...form.getInputProps('address')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="Whatsapp Number"
              {...form.getInputProps('whatsappNumber')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="College Name"
              {...form.getInputProps('collegeName')}
            />
            <TextInput
              mt={30}
              mb={30}
              placeholder="What's your  inspiration to join Sampark?"
              {...form.getInputProps('inspiration')}
            />
            {/* <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSchL2ptZ48MuMg_U6jq6WXQYqfNHo-Hmao9TI1GENpfLAeIuQ/viewform?embedded=true"
              width="640"
              height="1492"
            >
              Loading…
            </iframe> */}
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
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default Register;
