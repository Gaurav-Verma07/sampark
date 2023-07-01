import { Carousel } from '@mantine/carousel';
import { Box, Image, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import './imagegallery.css';

const ImageGallery = () => {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <Paper m={20} p={70} id="gallery">
      <Box>
        <Title
          order={1}
          size={45}
          weight="500"
          align="left"
          my={10}
          color="blue"
          className="title"
        >
          Our Gallery
        </Title>
      </Box>
      <Carousel
        className="carousell"
        withIndicators
        height={350}
        slideSize="33.333333%"
        slideGap="md"
        loop
        controlsOffset="xl"
        controlSize={40}
        align="start"
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
      >
        <Carousel.Slide>
          <Image
            onClick={() => navigate('/gallery')}
            className="imgc"
            style={{ cursor: 'pointer' }}
            radius={20}
            height={300}
            src="https://drive.google.com/uc?export=download&id=1LvVkueNKCOxWMZhmENlciL98fFnO1Iyl"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            onClick={() => navigate('/gallery')}
            className="imgc"
            style={{ cursor: 'pointer' }}
            radius={20}
            height={300}
            src="https://drive.google.com/uc?export=download&id=1Lrgi5PCH0MKgY6LYyaa3oGkXGiCRyYiK"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            onClick={() => navigate('/gallery')}
            className="imgc"
            style={{ cursor: 'pointer' }}
            radius={20}
            height={300}
            src="https://drive.google.com/uc?export=download&id=1LxlU3X8-1WH4TLDM4YSP9x21g4HVjggU"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            onClick={() => navigate('/gallery')}
            className="imgc"
            style={{ cursor: 'pointer' }}
            radius={20}
            height={300}
            src="https://drive.google.com/uc?export=download&id=1LtNaPzQYG_3AgRI__hB1BGKBWFh6Ulvo"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            onClick={() => navigate('/gallery')}
            className="imgc"
            style={{ cursor: 'pointer' }}
            radius={20}
            height={300}
            src="https://drive.google.com/uc?export=download&id=1Lr0fIwip2Fa5VyrThq4wx00vIUYkOxTO"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            onClick={() => navigate('/gallery')}
            className="imgc"
            style={{ cursor: 'pointer' }}
            radius={20}
            height={300}
            src="https://drive.google.com/uc?export=download&id=1MTxwomYotps5z_-BHpHhXvwSr1ISw-de"
          />
        </Carousel.Slide>
      </Carousel>
      <Box>
        <Text
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
          color={theme.colors.red[5]}
          size={20}
        >
          View more
          <IconArrowNarrowRight />
        </Text>
      </Box>
    </Paper>
  );
};

export default ImageGallery;
