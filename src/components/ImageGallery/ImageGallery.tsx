import { Carousel } from '@mantine/carousel';
import { Box, Image, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons';

const ImageGallery = () => {
  const theme = useMantineTheme();
  return (
    <Paper m={20} p={70} id="gallery">
      <Box>
        <Title order={1} weight="100" align="left" my={20}>
          Our Gallery
        </Title>
      </Box>
      <Carousel
        withIndicators
        height={250}
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
            radius={20}
            src="https://drive.google.com/uc?export=download&id=1LvVkueNKCOxWMZhmENlciL98fFnO1Iyl"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius={20}
            src="https://drive.google.com/uc?export=download&id=1Lrgi5PCH0MKgY6LYyaa3oGkXGiCRyYiK"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius={20}
            src="https://drive.google.com/uc?export=download&id=1LxlU3X8-1WH4TLDM4YSP9x21g4HVjggU"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius={20}
            src="https://drive.google.com/uc?export=download&id=1LtNaPzQYG_3AgRI__hB1BGKBWFh6Ulvo"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius={20}
            src="https://drive.google.com/uc?export=download&id=1Lr0fIwip2Fa5VyrThq4wx00vIUYkOxTO"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius={20}
            src="https://drive.google.com/uc?export=download&id=1MTxwomYotps5z_-BHpHhXvwSr1ISw-de"
          />
        </Carousel.Slide>
      </Carousel>
      <Box>
        <Text
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
          color={theme.colors.red[5]}
        >
          View more
          <IconArrowNarrowRight />
        </Text>
      </Box>
    </Paper>
  );
};

export default ImageGallery;
