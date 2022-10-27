import { Box, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { StyledContainer } from '../Styles';
import OrderDetails from './OrderDetails';
import OrderItem from './OrderItem';
import ProgressBar from './ProgressBar';

const MyOrders = () => {
  return (
    <StyledContainer>
      <Typography variant="h2">My Orders</Typography>
      <Grid container spacing={2} marginTop={2}>
        <Grid item md={12} lg={4}>
          <Stack spacing={2} sx={{ overflow: 'auto', height: '70%' }}>
            <Box>
              <OrderItem />
            </Box>
          </Stack>
        </Grid>
        <Grid item md={12} lg={8}>
          <OrderDetails />
          <ProgressBar />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default MyOrders;
