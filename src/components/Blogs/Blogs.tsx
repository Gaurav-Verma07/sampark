import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Box,
  Paper,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { mockdata } from './sampleData';
import useStyles from './styles';
import Logo from '../../assets/Images/samparklogotransparent.png';

const Blogs = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const cards = mockdata.map((article) => (
    <Card
      shadow="sm"
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
      id="blogs"
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} align="left" mt={5}>
        {article.title}
        {/* <Text component='span'color= {theme.colors.red[5]} td= "underline" weight= "200" > Read more</Text> */}
      </Text>
      {/* <Text color= {theme.colors.red[5]} td= "underline"  align= "left" weight= "200" > Read more</Text> */}
    </Card>
  ));

  return (
    <Paper m={20} px={70} mb={70}>
      <Box>
        <Title
          order={3}
          py={20}
          tt="capitalize"
          weight="400"
          color="teal"
          align="left"
        >
          Read more about our work through our blogs...
        </Title>
      </Box>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
        <Card
          shadow="lg"
          //   align= "center"
          p="md"
          radius="md"
          sx={{ backgroundColor: theme.colors.teal[0] }}
          component="a"
          href="#"
          className={classes.card}
        >
          {/* <AspectRatio ratio={1920 / 1080} > */}
          <Image pl={56} src={Logo} width={250} height={250} />
          {/* </AspectRatio> */}
          <Text
            color="dimmed"
            size="xs"
            transform="uppercase"
            weight={700}
            mt="md"
          >
            {/* {article.date} */}
          </Text>
          <Text className={classes.title} align="left" mt={5}>
            {/* {article.title}  */}
            {/* <Text component='span'color= {theme.colors.red[5]} td= "underline" weight= "200" > Read more</Text> */}
          </Text>
          <Text color={theme.colors.red[5]} td="underline" weight="200">
            {' '}
            Read more articles...
          </Text>
        </Card>
      </SimpleGrid>
    </Paper>
  );
};

export default Blogs;
