import {
  createStyles,
  Card,
  Image,
  Group,
  Text,
  Avatar,
  Button,
  Modal,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import React, { useState } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface EventCardType {
  _id: string;
  name: string;
  organizer: string;
  address: string;
  description: string;
  date: string;
  image: string;
  duration: number;
}
interface DeleteCardType {
  event: EventCardType;
  setDeleteId: (_id: string) => void;
}

export default function EventAdminCard(props: DeleteCardType) {
  const { _id, name, address, description, image }: EventCardType = props.event;
  const { classes } = useStyles();
  // const [isOpen, setIsOpen] = useState(false);
const [opened, { open, close }] = useDisclosure(false);
  const [initialLoading, setInitialLoading] = useState(false);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  // const openModal = () => {
  //   setIsOpen(true);
  // };


  const handleDelete = async () => {
    setInitialLoading(true);
    try {
      const res = await fetch('/api/admin/event/delete', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ id: _id }),
      });
      setInitialLoading(false);
      close();
    } catch (error) {
      setInitialLoading(false);
    }
  };

  return (
    <>
      {' '}
      <Card
        withBorder
        radius="md"
        className={classes.card}
        style={{ width: '300px' }}
      >
        <Card.Section mb="sm">
          <Button>Edit</Button>
          <Button onClick={open}>Delete</Button>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '5% 0',
            }}
          >
            <Image
              src={'/assets/Images/samparklogotransparent.png'}
              alt={'name'}
              height={150}
              width={150}
              style={{ borderRadius: '50%' }}
            />
          </div>
        </Card.Section>

        <Text
          fw={700}
          className={classes.title}
          mt="xs"
          style={{ textAlign: 'center' }}
        >
          {name}
        </Text>

        <Group mt="lg" style={{ justifyContent: 'center' }}>
          <Avatar src={'author.image'} radius="sm" />
          <Text fw={500}>{'Gaurav'}</Text>
        </Group>
        <div style={{ textAlign: 'center' }}>
          <Text fz="xs" c="dimmed">
            {description}
          </Text>
        </div>
      </Card>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <div style={{ textAlign: 'center' }}>
          <p>Are you sure you want to delete {name}?</p>
          <Button
            variant="outline"
            color="blue"
            onClick={close}
            style={{ marginRight: '10px' }}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            color="red"
            onClick={handleDelete}
            loading={initialLoading}
          >
            Delete
          </Button>
        </div>
      </Modal>
      <Group position="center">
        <Button onClick={open}>Open centered Modal</Button>
      </Group>
      {/* <Modal
        open={isOpen}
  onClose={onClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
      >
        <div style={{ textAlign: 'center' }}>
          <p>Are you sure you want to delete {name}?</p>
          <Button
            variant="outline"
            color="blue"
            onClick={onClose}
            style={{ marginRight: '10px' }}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            color="red"
            onClick={handleDelete}
            loading={initialLoading}
          >
            Delete
          </Button>
        </div>
      </Modal> */}
    </>
  );
}
