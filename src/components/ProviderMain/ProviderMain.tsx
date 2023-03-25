import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  Table,
  Badge,
} from '@mantine/core';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { URLSearchParams } from 'url';
import ProviderStats from '../ProviderStats/ProviderStats';
import { data } from './data';
import { getDatabase, ref, child, get } from 'firebase/database';
import { useEffect, useState } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: ' #F8F9FA',

    //  theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width: '50%',
    margin: '0 auto',
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
    }`,
  },
  tableRow: {
    borderBottom: 'none !important',
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}

const ProviderMain = () => {
  const { classes, theme } = useStyles();
  const [searchParams] = useSearchParams();
  const [userData, setuserData] = useState({
    Name: '',
    'Applying as?': '',
    'College Name': '',
    "City you're currently residing in?": '',
    Email: '',
    'Whatsapp Number': '',
  });
  const items = data.stats.map((stat: any) => (
    <div key={stat.label}>
      <Text align="center" size="lg" weight={500}>
        {stat.value}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  const getResponses = async () => {
    console.log('Here we are');
    const dbRef = ref(getDatabase());
    const response = await get(
      child(
        dbRef,
        `/1MN-kjuUq3k-jp6g-2L1maBkUsB9AggqbYUcgoB1GoH4/Form responses 1`,
      ),
    );
    const responseData = Object.values(response.val());
    console.log(responseData);
    const userMail: any = JSON.parse(localStorage.getItem('email') || '');
    console.log(userMail);
    const user: any = responseData.filter(
      (el: any) => el.Email === 'sample@gmail.com',
    );
    console.log(user);
    setuserData(user[0]);
  };

  useEffect(() => {
    getResponses();
  }, []);

  return (
    <Card>
      <Card p="xl" radius="md" className={classes.card}>
        {/* <Card.Section  /> */}
        <Avatar size={100} radius={100} mx="auto" className={classes.avatar} />
        {/* <Text align="center" size="lg" weight={500} mt="sm">
        {data.name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {data.job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
      <Button fullWidth radius="md" mt="xl" size="md" color={theme.colorScheme === 'dark' ? undefined : 'dark'}>
        Follow
      </Button> */}
        <Table
          verticalSpacing="md"
          className={classes.tableRow}
          sx={{ width: 500 }}
        >
          <tbody>
            <tr>
              <td className={classes.tableRow}>
                <Group spacing="sm" position="apart">
                  <Text size="md">Name</Text>
                  <Text size="md">{userData?.Name}</Text>
                </Group>
              </td>
            </tr>
            <tr>
              <td>
                <Group spacing="sm" position="apart">
                  <Text size="md">Designation</Text>
                  <Badge
                    size="xl"
                    variant="gradient"
                    gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                  >
                    {userData['Applying as?']}
                  </Badge>
                  {/* <Text size="md" color= "red">Volunteer</Text> */}
                </Group>
              </td>
            </tr>
            <tr>
              <td>
                <Group spacing="sm" position="apart">
                  <Text size="md">College</Text>
                  <Text size="md">{userData['College Name']}</Text>
                </Group>
              </td>
            </tr>
            <tr>
              <td>
                <Group spacing="sm" position="apart">
                  <Text size="md">City</Text>
                  <Text size="md">
                    {userData["City you're currently residing in?"]}
                  </Text>
                </Group>
              </td>
            </tr>
            <tr>
              <td>
                <Group spacing="sm" position="apart">
                  <Text size="md">Email Address:</Text>
                  <Text size="md">{userData['Email']}</Text>
                </Group>
              </td>
            </tr>
            <tr>
              <td>
                <Group spacing="sm" position="apart">
                  <Text size="md">Phone Number:</Text>
                  <Text size="md">{userData['Whatsapp Number']}</Text>
                </Group>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
      <ProviderStats />
    </Card>
  );
};

export default ProviderMain;
