'use client';
import { useState } from 'react';
// import { useRouter } from 'next/router';

import {
  Button,
  Container,
  Group,
  Header,
  Paper,
  Textarea,
  Stepper,
  Text,
  TextInput,
  createStyles,
  MultiSelect,
  Code,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { useForm } from '@mantine/form';
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

const BlogForm = () => {
  const [active, setActive] = useState(0);
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      title: '',
      author: '',
      content: '',
      tags: [],
      publishedDate: '',
      featuredImage: '',
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
            // onClick={() => {
            //   router.push('/');
            // }}
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
          Register Your Event:
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
              onChange={(value) => form.setFieldValue('tags', value)}
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
    </>
  );
};
export default BlogForm;
