import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import CustomImage from '../CustomImage';
import { StyledGrid, StyledGridItem, StyledText } from './Styles';

const Banner = ({ bannerData }) => {
  return (
    <StyledGrid container>
      {bannerData?.map((myData) => (
        <>
          <StyledGridItem item md={6} lg={6}>
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
              {myData?.buttons?.map((item) => (
                <Link key={item.id} href={item.url}>
                  <Button sx={{ color: 'white' }}>
                    {item.text}
                    <KeyboardDoubleArrowRightIcon />
                  </Button>
                </Link>
              ))}
            </Stack>
          </StyledGridItem>
          <Grid item md={6} lg={6}>
            <Box>
              <CustomImage
                src={
                  myData.coverImage?.data?.at()?.attributes?.url ??
                  '/banner.png'
                }
                width="100%"
                alt={myData?.heading}
              />
            </Box>
          </Grid>
        </>
      ))}
    </StyledGrid>
  );
};

export default Banner;
