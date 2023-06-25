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
import { mockdata } from './blogData';
import useStyles from './styles';
import './blog.css';
import Logo from '../../assets/Images/samparklogotransparent.png';
import { useNavigate } from 'react-router-dom';

const MainBlogs = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const cards = mockdata.map((article, index) => (
    <Card
      shadow="sm"
      key={index}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
      id="blogs"
      onClick={() => {
        navigate(`/blogs/${index}`);
      }}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} align="left" mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Paper m={20} px={70} mb={70} pt={20}>
      <Box>
        <Title
         className='blogtitle'
          order={3}
          py={20}
          tt="capitalize"
          weight="400"
          color="teal"
          align="center"
          style={{ cursor: 'pointer', marginBottom: '2%' }}
          // component="a"
          // href="/blogs"
          onClick={() => navigate('/blogs')}
        >
          Read more about our work through our blogs...
        </Title>
      </Box>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
        {/* <Card
          shadow="lg"
          p="md"
          radius="md"
          sx={{ backgroundColor: theme.colors.teal[0] }}
          component="a"
          href="#"
          className={classes.card}
        >
          <Image pl={56} src={Logo} width={250} height={250} />
          <Text
            color="dimmed"
            size="xs"
            transform="uppercase"
            weight={700}
            mt="md"
          ></Text>
          <Text className={classes.title} align="left" mt={5}></Text>
          <Text color={theme.colors.red[5]} td="underline" weight="200">
            {' '}
            Read more articles...
          </Text>
        </Card> */}
      </SimpleGrid>
    </Paper>
  );
};

export default MainBlogs;
