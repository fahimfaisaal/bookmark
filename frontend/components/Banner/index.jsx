import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { StyledGrid, StyledGridItem, StyledText } from './Styles';
import Link from 'next/link';

const getBanner = () => ({
  data: {
    id: 1,
    attributes: {
      buttons: {
        buttons: [
          {
            url: '/books',
            text: 'Shop Now'
          }
        ]
      }
    }
  }
});

const Banner = ({ bannerData }) => {
  const { data } = getBanner();

  return (
    <StyledGrid container>
      <StyledGridItem item md={6} lg={6}>
        {bannerData?.map((myData) => (
          <Stack
            direction={'column'}
            alignItems={'flex-start'}
            spacing={2}
            key={myData.id}
          >
            <Typography variant="h4">{myData?.status}</Typography>
            <StyledText variant="h1" fontSize={'3rem'}>
              {myData?.heading.slice(0, 14)} <br />
              {myData?.heading.slice(14, 28)}
            </StyledText>
            {data?.attributes?.buttons?.buttons?.map((item) => (
              <Link key={item.id} href={item.url}>
                <Button sx={{ color: 'white' }}>
                  {item.text}
                  <KeyboardDoubleArrowRightIcon />
                </Button>
              </Link>
            ))}
          </Stack>
        ))}
      </StyledGridItem>
      <Grid item md={6} lg={6}>
        <Box>
          <img src="/banner.png" width="100%" />
        </Box>
      </Grid>
    </StyledGrid>
  );
};

export default Banner;
