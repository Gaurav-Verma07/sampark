import { Grid, Container} from '@mantine/core';

// const child = <Skeleton height={140} radius="md" animate={false} />;

export function OurValues() {
    return (
        <div className="value-section">
            <h1>OUR VALUES</h1>
            <Container my="md">
                <Grid>
                    <Grid.Col className="grid-col" xs={4}>
                        
                        <h2>
                            INTERCONNECTION
                        </h2>
                        <p>
                            Our liberty is bound together. No person, community, or ecosystem exists in isolation, which means we need each other, and we need to learn from each other. It also means the safety and wellbeing of people are inextricably linked to the safety and wellbeing of our natural world.
                        </p>

                    </Grid.Col>
                    <Grid.Col className="grid-col" xs={8}>

                        <h2>
                            INTEGRITY
                        </h2>
                        <p>
                            We hold ourselves to a high standard. We are committed to being fair, objective, and proactively transparent in our decisions and behaviors. We honor our commitments and doing the right thing, even when no one is looking.
                        </p>
                    </Grid.Col>
                    {/* <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col> */}
                    <Grid.Col className="grid-col" xs={3}>

                        <h3>
                            Heading 2
                        </h3>
                        <p>
                            The most effective solutions to violence and exploitation will be crafted by a diverse and collaborative community, with those most affected by injustice at the head of the table.
                        </p>
                    </Grid.Col>
                    <Grid.Col className="grid-col" xs={3}>

                        <h2>
                            Heading
                        </h2>
                        <p>
                            Everyone deserves the safety and opportunity to reach their full potential. In service to our mission, we call out and address structural violence and oppression within and outside of our organization.
                        </p>
                    </Grid.Col>
                    <Grid.Col className="grid-col" xs={6}>

                        <h2>
                            Heading 3
                        </h2>
                        <p>
                            Everyone deserves the safety and opportunity to reach their full potential. In service to our mission, we call out and address structural violence and oppression within and outside of our organization.
                        </p>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>


    );
}