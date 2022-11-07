import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { StyledGrid, StyledGridItem } from './Styles';

const Banner = () => {
  return (
    <StyledGrid container>
      <StyledGridItem item md={6} lg={6}>
        <Stack direction={'column'} alignItems={'flex-start'} spacing={2}>
          <Typography variant="h4">SALE UP TO 20% OFF</Typography>
          <Typography variant="h1" fontSize={'3rem'}>
            Meet Your Next <br /> Favorite Books.
          </Typography>
          <Button sx={{ color: 'white' }}>
            Shop Now <KeyboardDoubleArrowRightIcon />
          </Button>
        </Stack>
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
