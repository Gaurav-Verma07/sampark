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
import SeekerStats from '../SeekerStats/SeekerStats';
import { data } from './data';

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

const SeekerMain = () => {
  const { classes, theme } = useStyles();

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
                  <Text size="md">Name of NGO/slum</Text>
                  <Text size="md">The Smile Foundation</Text>
                </Group>
              </td>
            </tr>
            <tr>
              <td className={classes.tableRow}>
                <Group spacing="sm" position="apart">
                  <Text size="md">Name of representative</Text>
                  <Text size="md">Rishabh Jain</Text>
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
                    Volunteer
                  </Badge>
                  {/* <Text size="md" color= "red">Volunteer</Text> */}
                </Group>
              </td>
            </tr>

            <tr>
              <td>
                <Group spacing="sm" position="apart">
                  <Text size="md">City</Text>
                  <Text size="md">Lucknow</Text>
                </Group>
              </td>
            </tr>
            <tr>
              <td>
                <Group spacing="sm" position="apart">
                  <Text size="md">Email Address:</Text>
                  <Text size="md">rishabh@gmail.com</Text>
                </Group>
              </td>
            </tr>
            <tr>
              <td>
                <Group spacing="sm" position="apart">
                  <Text size="md">Phone Number:</Text>
                  <Text size="md">1234567890</Text>
                </Group>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
      <SeekerStats />
    </Card>
  );
};

export default SeekerMain;
