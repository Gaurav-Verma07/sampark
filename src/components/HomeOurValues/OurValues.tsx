import {
  Grid,
  Container,
  Text,
  Title,
  Paper,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles(() => ({
  grid: {
    backgroundColor: 'red',
  },
}));

export function OurValues() {
  const { classes, cx } = useStyles();

  return (
    <Paper className="value-section" id="values">
      <Title order={1} weight={100}>
        OUR VALUES
      </Title>
      <Container my="md">
        <Grid>
          <Grid.Col xs={4} className={cx('grid-col', classes.grid)}>
            <Title order={2}>Empowerment</Title>
            <Text fz="xs" color="teal">
            We prioritize empowering individuals and communities to take control of their own lives and work towards positive change.
            </Text>
          </Grid.Col>
          <Grid.Col className="grid-col" xs={8}>
            <Title order={2}>Collaboration</Title>
            <Text>
            Value of collaboration with other organizations and stakeholders to achieve shared goals and maximize impact is very important to us.
            </Text>
          </Grid.Col>
          <Grid.Col className="grid-col" xs={3}>
            <Title order={3}>Heading 2</Title>
            <Text>
              The most effective solutions to violence and exploitation will be
              crafted by a diverse and collaborative community, with those most
              affected by injustice at the head of the table.
            </Text>
          </Grid.Col>
          <Grid.Col className="grid-col" xs={3}>
            <Title order={2}>Community development</Title>
            <Text>
            Supporting the development of needy communities through education, training, and other initiatives is our utmost goal.
            </Text>
          </Grid.Col>
          <Grid.Col className="grid-col" xs={6}>
            <Title order={2}>Heading 3</Title>
            <Text>
              Everyone deserves the safety and opportunity to reach their full
              potential. In service to our mission, we call out and address
              structural violence and oppression within and outside of our
              organization.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  );
}
