import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { StyledGrid, StyledGridItem, StyledText } from './Styles';

const getBanner = () => ({
  data: {
    id: 1,
    attributes: {
      createdAt: '2022-11-07T12:18:32.358Z',
      updatedAt: '2022-11-08T09:16:46.704Z',
      publishedAt: '2022-11-07T12:40:37.315Z',
      heading: 'Meet Your Next Favorite Books.',
      status: 'SALE UP TO 20% OFF',
      buttons: {
        buttons: [
          {
            url: '/books',
            text: 'Shop Now'
          }
        ]
      },
      images: {
        data: [
          {
            id: 225,
            attributes: {
              name: 'banner.png',
              alternativeText: 'banner.png',
              caption: 'banner.png',
              width: 954,
              height: 451,
              formats: {
                small: {
                  ext: '.png',
                  url: '/uploads/small_banner_edb2a0dabb.png',
                  hash: 'small_banner_edb2a0dabb',
                  mime: 'image/png',
                  name: 'small_banner.png',
                  path: null,
                  size: 216.07,
                  width: 500,
                  height: 236
                },
                medium: {
                  ext: '.png',
                  url: '/uploads/medium_banner_edb2a0dabb.png',
                  hash: 'medium_banner_edb2a0dabb',
                  mime: 'image/png',
                  name: 'medium_banner.png',
                  path: null,
                  size: 457.09,
                  width: 750,
                  height: 355
                },
                thumbnail: {
                  ext: '.png',
                  url: '/uploads/thumbnail_banner_edb2a0dabb.png',
                  hash: 'thumbnail_banner_edb2a0dabb',
                  mime: 'image/png',
                  name: 'thumbnail_banner.png',
                  path: null,
                  size: 59.72,
                  width: 245,
                  height: 116
                }
              },
              hash: 'banner_edb2a0dabb',
              ext: '.png',
              mime: 'image/png',
              size: 648.58,
              url: '/uploads/banner_edb2a0dabb.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2022-11-07T12:36:18.223Z',
              updatedAt: '2022-11-07T12:36:18.223Z'
            }
          }
        ]
      }
    }
  }
});

const Banner = () => {
  const { data } = getBanner();

  return (
    <StyledGrid container>
      <StyledGridItem item md={6} lg={6}>
        <Stack direction={'column'} alignItems={'flex-start'} spacing={2}>
          <Typography variant="h4">{data.attributes?.status}</Typography>
          <StyledText variant="h1" fontSize={'3rem'}>
            {data.attributes?.heading.slice(0, 14)} <br />
            {data.attributes?.heading.slice(14, 28)}
          </StyledText>
          {data?.attributes?.buttons?.buttons?.map((item) => (
            <Button key={item.id} sx={{ color: 'white' }}>
              {item.text}
              <KeyboardDoubleArrowRightIcon />
            </Button>
          ))}
        </Stack>
      </StyledGridItem>
      <Grid item md={6} lg={6}>
        <Box>
          <img src="/banner.png" width="100%" alt={data.attributes?.heading} />
        </Box>
      </Grid>
    </StyledGrid>
  );
};

export default Banner;
