"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Container, 
  Header,
  Paper,
  Stepper,
  Text,
  TextInput,
  Textarea,
  Group,
  MultiSelect,
  createStyles,
  Code,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

const useStyles = createStyles(() => ({
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
}));

const BlogRegister = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      title: '',
      author: '',
      content: '',
      tags: [],
      publishedDate: '',
      featuredImage: '',
      comments: [],
      likes: 0,
    },
  });


  const tagsOptions = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Health', label: 'Health' },
    { value: 'Travel', label: 'Travel' },
    { value: 'Food', label: 'Food' },
  ];

  const registerHandler = async () => {
    console.log('data: ', form.values);
    try {

       const response = await fetch('/api/admin/blogs/add', {
         method: 'POST',
         body: JSON.stringify({ data: form.values }),
       }).then((res) => res.json());
       console.log(response);
       if (response.success) {
         toast.success('Blog data added successfully', {
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
      console.error(error);
      toast.error('Something went wrong. Please try again', {
        position: 'top-right',
        autoClose: 2000,
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
          Add Your Blog
        </Text>
        <Stepper active={active} breakpoint="sm">
          <Stepper.Step mt={20} label="First step" description="Blog details">
             <TextInput 
             label="Title"
            placeholder="Enter blog title"
            {...form.getInputProps('title')}
          />
          <TextInput
            label="Author"
            placeholder="Enter author name"
            {...form.getInputProps('author')}
          />
          <Textarea
            label="Content"
            placeholder="Enter blog content"
            {...form.getInputProps('content')}
          />
          <MultiSelect
            label="Tags"
            placeholder="Select tags"
            data={tagsOptions}
            value={form.values.tags}
            onChange={(value) => form.setFieldValue('tags', JSON.stringify(value))}
          />
          <TextInput
            label="Published Date"
            placeholder="Enter published date"
            type="date"
            {...form.getInputProps('publishedDate')}
          />
          <TextInput
            label="Featured Image"
            placeholder="Enter featured image URL"
            {...form.getInputProps('featuredImage')}
          />
          </Stepper.Step>
          <Stepper.Completed>
            Completed! Form values:
            <Code block mt="xl">
              {JSON.stringify(form.values, null, 2)}
            </Code>
          </Stepper.Completed>
        </Stepper>
        <Group position="right" mt="xl"> <Button onClick={registerHandler}>Submit</Button></Group>
      </Paper>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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

export default BlogRegister;