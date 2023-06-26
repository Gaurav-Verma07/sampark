import { getDatabase, ref, child, get } from 'firebase/database';
import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Image,
  Anchor,
} from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';
const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundImage: 'url("../../assets/Images/homeImg.jpg")',
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    height: '100vh',
    maxWidth: '28rem',
    paddingTop: '5rem',
    marginTop: '2em',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  }
}));

const Auth = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [details, setDetails] = useState({ name: '', email: '', password: '' });
  const user: string = localStorage.getItem('user_uid') || '';

  const submitHandler = () => {
    if (auth.currentUser) {
      localStorage.setItem('email', JSON.stringify(details.email));
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${user}`))
        .then((snapshot: any) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            navigate("provider/home");
          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={75}>
        <Title order={2} className={classes.title} ta="center" mt="md">
          Welcome to Sampark!
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
        <Button
          fullWidth
          mt="xl"
          size="md"
          onClick={() => {
            submitHandler();
          }}
        >
          Login
        </Button>
        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'>
            href="#"
            weight={700}
            onClick={() => {
              navigate('/register');
            }}
          >
           Register
          </Anchor>
        </Text>
      </Paper>
      <div>
        <Image src={SamparkLogo} style={{height: '300px', width: '400px',margin: '155px 0 0 175px'}}  />
      </div>
    </div>
  );
};

export default Auth;
