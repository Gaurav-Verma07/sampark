import { Carousel } from '@mantine/carousel';
import { Box, Image, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons';

const ImageGallery = () => {
  const theme = useMantineTheme();
  return (
    <Paper m={20} p={70} id= "gallery">
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
        //   m= {20}
      >
        <Carousel.Slide>
          <Image
            radius={20}
            src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/01/25/Pictures/_b089d218-e2e2-11e6-947f-9490afc24a59.jpg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius={20}
            src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/01/25/Pictures/_b089d218-e2e2-11e6-947f-9490afc24a59.jpg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius={20}
            src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/01/25/Pictures/_b089d218-e2e2-11e6-947f-9490afc24a59.jpg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius={20}
            src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/01/25/Pictures/_b089d218-e2e2-11e6-947f-9490afc24a59.jpg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            radius={20}
            src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/01/25/Pictures/_b089d218-e2e2-11e6-947f-9490afc24a59.jpg"
          />
        </Carousel.Slide>
        {/* ...other slides */}
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
