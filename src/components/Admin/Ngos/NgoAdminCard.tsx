import {
  createStyles,
  Card,
  Image,
  Group,
  Text,
  Avatar,
  Modal,
  Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface NgoCardType {
  _id: string;
  name: string;
  address: string;
  description: string;
  image: string;
}

interface DeleteCardType {
  ngo: NgoCardType;
  setDeleteId: (_id: string) => void;
}

export default function NgoAdminCard(props: DeleteCardType) {
  const { _id, name, address, description, image }: NgoCardType = props.ngo;
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [initialLoading, setInitialLoading] = useState(false);

  const handleDelete = async () => {
    setInitialLoading(true);
    try {
      const res = await fetch('/api/admin/ngos/delete', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ id: _id }),
      });
      if (res.status === 200) {
        toast.success('Ngo is successfully deleted', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        props.setDeleteId(_id);
        setInitialLoading(false);
        close();
      }
    } catch (error) {
      toast.error('Something went wrong. Try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setInitialLoading(false);
    }
  };

  return (
    <>
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
      <Modal opened={opened} onClose={close} title="Orphanage Delete" centered>
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
      <ToastContainer
        position="top-right"
        autoClose={1000}
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
}
