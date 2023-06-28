import {
    createStyles,
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    Box,
    Space,
  } from '@mantine/core';
  import { IconAt, IconPhone, IconMapPins } from '@tabler/icons';
  import './ContactUs.css'
  import { ChangeEvent, useState } from 'react';
  import validation, {ErrorState} from '../../utils/validation';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: 400,
      boxSizing: 'border-box',
      backgroundImage: `linear-gradient(-60deg, ${theme.colors.gray[5]} 0%, ${theme.colors.gray[8]} 100%)`,
      padding: theme.spacing.xl * 2.5,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        padding: theme.spacing.xl * 1.5,
      },
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: theme.white,
      lineHeight: 2,
    },
  
    description: {
      color: theme.colors[theme.primaryColor][0],
      maxWidth: 300,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },
  
    form: {
      backgroundColor: theme.white,
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
      textAlign: 'left',
    },
  
    social: {
      color: theme.white,
  
      '&:hover': {
        color: theme.colors[theme.primaryColor][1],
      },
    },
  
    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,
  
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },
  
    inputLabel: {
      color: theme.black,
    },
  
    control: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },
  
    iconList: {
      color: theme.white,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    error: {
      color: "red",
      fontSize: "16px"
    }
  }));
  
  export function ContactUs() {
    const { classes } = useStyles();
    const [userData, setUserData] = useState({
      email: "",
      name: "",
     message: "",
    });
    const [error, setError] = useState<ErrorState>({});
  
    const postUserData = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
      setUserData({ ...userData, [name]: value });
      const errorObj = validation[name](value);
      setError((previous)=>{
        return {...previous, ...errorObj}
      })
    };
  
    // connect with firebase
    const submitData = async (event: { preventDefault: () => void; }) => {
      console.log('submitData called')
      event.preventDefault();
      const {  email, name,  message } = userData;
  
      if (email && name && message) {
        
        const res = await fetch(
          "https://demo-sampark.asia-southeast1.firebasedatabase.app",
          {
            method: "POST",
           body: JSON.stringify({
              email,
              name,
              message,
            }),
          }
        );
        if (res) {
            setUserData({
              email: "",
              name: "",
              message: "",
            });
            alert("Data Stored");
          } else {
            alert("Error occurred while storing data");
          }
        }else {
        alert("please fill the datails");
      }
    };
  
    
      
    return (
      <div className={classes.wrapper} id="contact">
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        >
          <Box className={classes.iconList}>
            <Title align="left" className={classes.title}>
              Contact us
            </Title>
            <Text align="left" className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>
  
            <div className="email_contactUS">
              <IconAt color="#fff" className='icons' /> Sampark@gmail.com
            </div>
            <Space h="md" />
            <div className="phone_contactUs">
              <IconPhone color="#fff" className='icons' /> +91 2569751165
            </div>
            <Space h="md" />
            <div className="map_contactUs">
              <IconMapPins color="#fff" className='icons' /> IET LUCKNOW Sitapur Road Lucknow
            </div>
          </Box>
          <div className={classes.form}>
          <form method='POST'onSubmit={submitData}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              value={userData.email}
              name="email"
              onChange= {postUserData}
              required
             
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
         {error.email && <p className={classes.error}>Enter Valid Email.</p>}
            <TextInput
              label="Name"
              placeholder="John Doe"
              value={userData.name}
              name="name"
              onChange={ postUserData}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
         {error.name && <p className={classes.error}>Name must be atleast 6 characters long.</p>}
            
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              value={userData.message}
              name = "message"
              onChange={ postUserData}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
         {error.message && <p className={classes.error}>Enter your message within 10 to 100 words</p>}
  
            <Group position="right" mt="md">
              <Button   type="submit" onClick={submitData} className={classes.control} >
         Send message</Button>
            </Group>
            </form>
          </div>
        </SimpleGrid>
      </div>
    );
  }
  
  
  