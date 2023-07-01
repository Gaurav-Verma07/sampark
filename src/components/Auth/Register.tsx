import {
  Button,
  Code,
  Group,
  Paper,
  PasswordInput,
  Stepper,
  Text,
  TextInput,
  createStyles,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { child, get, getDatabase, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { registerUserHandler } from '../../utils/ApiRequests/firebaseAuth';

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
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: '',
      password: '',
      email: '',
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
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }
      return {};
    },
  });

  const getResponses = async () => {
    console.log('Here we are');
    const dbRef = ref(getDatabase());
    const response = await get(
      child(
        dbRef,
        `/1MN-kjuUq3k-jp6g-2L1maBkUsB9AggqbYUcgoB1GoH4/Form responses 1`,
      ),
    );
    const responseData = response.val();
    console.log({ responseData });
  };

  useEffect(() => {
    getResponses();
  }, []);

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const registerHandler = () => {
    registerUserHandler(form.values.email, form.values.password);
    console.log(form.values);
    localStorage.setItem('email', JSON.stringify(form.values.email));
    navigate(`/provider/home`);
  };
  const box1 = {
    boxShadow:
      ' rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
  };
  return (
    <Paper style={box1} className={classes.main} radius="md" p="xl" withBorder>
      <Text color="teal" align="center" pb={30} fz={38} fw={600}>
        Register Here:
      </Text>
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step mt={20} label="First step" description="Profile settings">
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
          <TextInput
            mt={30}
            mb={30}
            placeholder="Email"
            {...form.getInputProps('email')}
          />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Personal information">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSchL2ptZ48MuMg_U6jq6WXQYqfNHo-Hmao9TI1GENpfLAeIuQ/viewform?embedded=true"
            width="640"
            height="1492"
          >
            Loading…
          </iframe>
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
  );
};
export default Register;
