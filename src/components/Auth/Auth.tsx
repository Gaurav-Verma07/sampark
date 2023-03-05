import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Image,
  Group,
  Divider,
  // rem,
} from '@mantine/core';
import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../assets/googleLogo.svg';
import {
  firebaseSignIn,
  registerHandler,
} from '../../utils/ApiRequests/firebaseAuth';
import { firebaseGoogleAuth } from '../../utils/ApiRequests/firebaseGoogleAuth';
import { updateUser } from '../../utils/ApiRequests/userProfile';
const useStyles = createStyles((theme) => ({
  wrapper: {
    // minHeight: rem(900),
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundImage: 'url("../../assets/Images/homeImg.jpg")',
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    //   minHeight: rem(900),
    height: '100vh',
    //   maxWidth: rem(450),
    maxWidth: '28rem',
    //   paddingTop: rem(80),
    paddingTop: '5rem',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const Auth = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: '', password: '' });

  const submitHandler = () => {
    firebaseSignIn(details.email, details.password);
    // redirect("/provider")
    navigate('/provider');
    // updateUser();
  };

  const signWithGoogle = () => {
    firebaseGoogleAuth();
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md">
          Welcome back to Sampark!
        </Title>
        <Text color="dimmed" ta="center" mt="md" mb={50}>
          Let&apos;s make a change.
        </Text>

        <TextInput
          label="Email address"
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Password"
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" onClick={submitHandler}>
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'>
            href="#"
            weight={700}
            onClick={(event) => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text>

        <Divider my={20} label="or" labelPosition="center" />
        <Group
          mx="auto"
          py={10}
          my={20}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '30px',
            border: '1px solid  #CED4DA',
            cursor: 'pointer',
          }}
          onClick={signWithGoogle}
        >
          <Image src={GoogleLogo} width={20} height={20} />
          <Text>Continue with Google</Text>
        </Group>
      </Paper>
    </div>
  );
};

export default Auth;
