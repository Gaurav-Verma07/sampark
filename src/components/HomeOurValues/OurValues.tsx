import { Grid, Container, Text, Title, Paper } from '@mantine/core';

// const child = <Skeleton height={140} radius="md" animate={false} />;

export function OurValues() {
  return (
    <Paper className="value-section">
      <Title order={1} weight={100}>
        OUR VALUES
      </Title>
      <Container my="md">
        <Grid>
          <Grid.Col className="grid-col" xs={4}>
            <Title order={2}>INTERCONNECTION</Title>
            <Text>
              Our liberty is bound together. No person, community, or ecosystem
              exists in isolation, which means we need each other, and we need
              to learn from each other. It also means the safety and wellbeing
              of people are inextricably linked to the safety and wellbeing of
              our natural world.
            </Text>
          </Grid.Col>
          <Grid.Col className="grid-col" xs={8}>
            <Title order={2}>INTEGRITY</Title>
            <Text>
              We hold ourselves to a high standard. We are committed to being
              fair, objective, and proactively transparent in our decisions and
              behaviors. We honor our commitments and doing the right thing,
              even when no one is looking.
            </Text>
          </Grid.Col>
          {/* <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col> */}
          <Grid.Col className="grid-col" xs={3}>
            <Title order={3}>Heading 2</Title>
            <Text>
              The most effective solutions to violence and exploitation will be
              crafted by a diverse and collaborative community, with those most
              affected by injustice at the head of the table.
            </Text>
          </Grid.Col>
          <Grid.Col className="grid-col" xs={3}>
            <Title order={2}>Heading</Title>
            <Text>
              Everyone deserves the safety and opportunity to reach their full
              potential. In service to our mission, we call out and address
              structural violence and oppression within and outside of our
              organization.
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
