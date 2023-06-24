import {
  Button,
  Container,
  createStyles,
  Header,
  Image,
  SimpleGrid,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import SamparkLogo from '../../assets/Images/samparklogotransparent.png';
import { data } from './blogContent';
import './blogs.css';
import { BlogCard } from './BlogCard';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  blog: {
    marginTop: '2rem',
    justifyItems: 'center',
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '4%',
    ...theme.fn.hover({
      transition: 'transform 150ms ease, box-shadow 150ms ease',
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    }),
  },
}));

function AllBlogs() {
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <div>
      <Header height={80} mb={50}>
        <Container className={classes.header}>
          <Image src={SamparkLogo} height={100} width={100} />
        </Container>
      </Header>
      <Button
        my={20}
        variant="outline"
        color="teal"
        className={classes.back}
        onClick={() => {
          navigate('/');
        }}
      >
        {' '}
        Go Back
      </Button>
      <SimpleGrid
        className={classes.blog}
        cols={3}
        breakpoints={[
          { maxWidth: 'sm', cols: 1 },
          { maxWidth: 'md', cols: 2 },
        ]}
      >
        {' '}
        {data.map((item, index) => (
          <BlogCard
            data={item.blogData}
            image={item.image}
            key={index}
            index={index}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default AllBlogs;
