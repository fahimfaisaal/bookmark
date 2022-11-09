import { Box, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import OrderDetails from './OrderDetails';
import OrderItem from './OrderItem';
import ProgressBar from './ProgressBar';
import { StyledGrid } from './Styles';

function MyOrders() {
  return (
    <Grid container spacing={2} sx={{ marginTop: 0.5 }}>
      <StyledGrid item xs={12} sm={12} md={12} lg={4}>
        <Typography variant="h2" paddingBottom={2}>
          My Orders
        </Typography>
        <Stack spacing={2} sx={{ overflow: 'auto', height: '70%' }}>
          <Box>
            <OrderItem />
            <OrderItem />
          </Box>
        </Stack>
      </StyledGrid>
      <StyledGrid item xs={12} sm={12} md={12} lg={7}>
        <OrderDetails />
        <ProgressBar />
      </StyledGrid>
    </Grid>
  );
}

export default MyOrders;
