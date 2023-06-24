import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';
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
} from '@mantine/core';
import { auth } from '../../utils/firebase';

const useStyles = createStyles((theme) => ({
  wrapper: {
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
  const [details, setDetails] = useState({ name: '', email: '', password: '' });
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const user = localStorage.getItem('user_uid') || '';

  const submitHandler = () => {
    if (auth.currentUser) {
      localStorage.setItem('email', JSON.stringify(details.email));
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${user}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            navigate('provider/home');
          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // const handleForgotPassword = () => {
  //   if (forgotPasswordEmail) {
  //     auth
  //       .sendPasswordResetEmail(forgotPasswordEmail)
  //       .then(() => {
  //         console.log('Password reset email sent successfully');
  //         // Provide feedback to the user (e.g., show a success message)
  //       })
  //       .catch((error:any) => {
  //         console.error('Error sending password reset email:', error);
  //         // Provide feedback to the user (e.g., show an error message)
  //       });
  //   } else {
  //     // Handle case when the user did not enter an email address
  //     // Provide feedback to the user (e.g., show an error message)
  //   }
  // };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
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
        <Text ta="right" mt="md" color='#777' size='sm'>
          <Anchor<'a'>
            href="#"
            sx={()=>({
              color:'#777'
            })}
            onClick={() => {
              // Add your own logic for handling the Forgot Password link click
              console.log('Forgot Password clicked');
            }}
          >
            Forgot Password?
          </Anchor>
        </Text>
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
    </div>
  );
};

export default Auth;
