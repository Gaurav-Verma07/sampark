import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Header,
  // Image,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
import Image from 'next/image';
import { IconArrowLeft } from '@tabler/icons';
import { child, get, getDatabase, ref } from 'firebase/database';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import { auth } from '../../utils/firebase';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundImage: 'url("/assets/Images/homeImg.jpg")',
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
  },
}));

const Auth = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const [details, setDetails] = useState({ name: '', email: '', password: '' });
  // const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  // const user = localStorage.getItem('user_uid') || '';

  const submitHandler = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(details),
      }).then((res) => res.json());
      if(response.success){
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
      }if (response.errors && response.errors.length > 0) {
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
    }
    // if (auth.currentUser) {
    //   localStorage.setItem('email', JSON.stringify(details.email));
    //   const dbRef = ref(getDatabase());
    //   get(child(dbRef, `users/${user}`))
    //     .then((snapshot) => {
    //       if (snapshot.exists()) {
    //         const userData = snapshot.val();
    //         router.push('provider/home');
    //       } else {
    //         console.log('No data available');
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
  // };
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
          <Text ta="right" mt="md" color="#777" size="sm">
            <Anchor<'a'>
              href="#"
              sx={() => ({
                color: '#777',
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
                router.push('/register');
              }}
            >
              Register
            </Anchor>
          </Text>
        </Paper>
        <div>
          <Image
            src="/assets/Images/samparklogotransparent.png"
            alt="Sampark-logo"
            height={300}
            width={400}
            style={{
              // height: '300px',
              // width: '400px',
              margin: '155px 0 0 175px',
            }}
          />
        </div>
      </div>
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

export default Auth;
