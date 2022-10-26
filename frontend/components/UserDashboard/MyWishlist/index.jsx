import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import CustomImage from '../../CustomImage';
import {
  StyledCart,
  StyledContainer,
  StyledImage,
  StyledRemove,
  StyledStack,
} from './Styles';

const MyWishlist = () => {
  return (
    <StyledStack direction={'row'} justifyContent="space-between">
      <Grid container>
        <Grid item sm={12} md={6} lg={6}>
          <Stack direction={'row'} spacing={3} alignItems="center">
            <StyledImage>
              <CustomImage src="/Comic-Books.jpg" width="70px" height="70px" />
            </StyledImage>
            <Stack direction="column" spacing={1}>
              <Typography variant="h3">Baby Spinach</Typography>
              <Typography variant="subtitle2">Grocery Shop</Typography>
              <StyledContainer variant="btnDark">
                5 <StarIcon fontSize="small" />
              </StyledContainer>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Stack direction={'column'} textAlign={'right'} marginTop="10px">
            <Typography variant="h3">$60.00</Typography>
            <Stack direction={'row'} justifyContent="end">
              <StyledCart>Add to Cart</StyledCart>
              <StyledRemove>Remove</StyledRemove>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </StyledStack>
  );
};

export default MyWishlist;
