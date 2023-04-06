import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Table,
  Badge,
} from '@mantine/core';
import ProviderStats from '../ProviderStats/ProviderStats';
import { getDatabase, ref, child, get } from 'firebase/database';
import { useEffect, useState } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: ' #F8F9FA',

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

const ProviderMain = () => {
  const { classes } = useStyles();
  const [userData, setuserData] = useState({
    Name: '',
    'Applying as?': '',
    'College Name': '',
    "City you're currently residing in?": '',
    Email: '',
    'Whatsapp Number': '',
  });

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
    const user: any = responseData.filter((el: any) => el.Email === userMail);
    setuserData(user[0]);
  };

  useEffect(() => {
    getResponses();
  }, []);

  return (
    <Card>
      <Card p="xl" radius="md" className={classes.card}>
        <Avatar size={100} radius={100} mx="auto" className={classes.avatar} />
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
