import { useContext, useEffect, useState } from 'react';
import {
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  createStyles,
  Paper,
  PaperProps,
  Text,
  Select,
  Code,
} from '@mantine/core';
import { useForm } from '@mantine/form';
// import AuthContext from '../../store/auth-context';
// import { registerUser } from '../../utils/apiRequests';
import { googleFormsToJson } from 'react-google-forms-hooks'
// import { runSample } from '../../utils/ApiRequests/firebaseAuth';
import { getDatabase, ref, child, get } from 'firebase/database';
import { useNavigate } from 'react-router';
import { registerUserHandler } from '../../utils/ApiRequests/firebaseAuth';

const useStyles = createStyles(() => {
  return { main: { margin: '5% auto', width: '100%' } };
});

const Register = () => {
  const navigate= useNavigate();
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
          name: values.name.trim().length < 6 ? 'Username must include at least 6 characters' : null,
          password: values.password.length < 6 ? 'Password must include at least 6 characters' : null,
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }
      return {};
    },
  });

  const getResponses= async()=>{
    console.log("Here we are")
    const dbRef = ref(getDatabase());
     const response= await get(child(dbRef, `/1MN-kjuUq3k-jp6g-2L1maBkUsB9AggqbYUcgoB1GoH4/Form responses 1`))
     const responseData= response.val();
     console.log({responseData})
  } 

  useEffect(()=>{
    getResponses();
  }, [])


  // runSample();

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const registerHandler = () => {
    registerUserHandler(form.values.email, form.values.password)
    console.log(form.values);
    localStorage.setItem('email', JSON.stringify(form.values.email))
    navigate(`/provider/home`)
  };

  return (
    <Paper className={classes.main} radius="md" p="xl" withBorder>
      <Text color="teal" align="center" pb={20} fz={20} fw={600}>
        Register Here:
      </Text>
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step label="First step" description="Profile settings">
          <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
          <PasswordInput mt="md" label="Password" placeholder="Password" {...form.getInputProps('password')} />
          <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Personal information">
          {/* <Select
            mt="md"
            label="Profession"
            defaultValue="student"
            {...form.getInputProps('profession')}
            data={[
              { value: 'student', label: 'Student' },
              { value: 'professional', label: 'Professional' },
            ]}
          /> */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSchL2ptZ48MuMg_U6jq6WXQYqfNHo-Hmao9TI1GENpfLAeIuQ/viewform?embedded=true"
            width="640"
            height="1492"
            // frameBorder="0"
            // marginHeight="0"
            // marginWidth="0"
          >
            Loading…
          </iframe>
        </Stepper.Step>

        {/* <Stepper.Step label="Final step" description="Social media">
          <TextInput label="College" placeholder="College Name" {...form.getInputProps('college')} />
          <TextInput mt="md" label="LinkedIn" placeholder="LinkedIn profile" {...form.getInputProps('linkedin')} />
        </Stepper.Step> */}
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
