import {
  Badge,
  Table,
  Group,
  Text,
  Anchor,
  ScrollArea,
  useMantineTheme,
} from '@mantine/core';
import { getDatabase, ref, child, get } from 'firebase/database';
import { useEffect, useState } from 'react';

const ProviderCollegeTeam = () => {
  const [teamData, setTeamData]: any = useState([
    { Name: '', 'Applying as?': '' },
  ]);
  const theme = useMantineTheme();

  const getResponses = async () => {
    const dbRef = ref(getDatabase());
    const response = await get(
      child(
        dbRef,
        `/1MN-kjuUq3k-jp6g-2L1maBkUsB9AggqbYUcgoB1GoH4/Form responses 1`,
      ),
    );
    const responseData = Object.values(response.val());
    const userMail: any = JSON.parse(localStorage.getItem('email') || '');
    const user: any = responseData.filter(
      (el: any) => el.Email === 'sample@gmail.com',
    );
    const collegeName = user[0]['College Name'];
    const allTeamUsers = responseData.filter(
      (el: any) => el['College Name'] === collegeName,
    );
    setTeamData(allTeamUsers);
  };

  useEffect(() => {
    getResponses();
  }, []);

  const rows = teamData.map((item: any) => (
    <tr key={item.Name}>
      <td>
        <Group spacing="sm">
          <Text size="sm" weight={500}>
            {item['Name']}
          </Text>
        </Group>
      </td>

      <td>
        <Badge variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}>
          {item['Applying as?']}
        </Badge>
      </td>
      <td>
        <Anchor<'a'>
          size="sm"
          href="#"
          onClick={(event) => event.preventDefault()}
        >
          {item['Email']}
        </Anchor>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {item['Whatsapp Number']}
        </Text>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email Address</th>
            <th>Contact Number</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};

export default ProviderCollegeTeam;
