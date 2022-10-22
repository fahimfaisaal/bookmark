import { Box, Typography } from '@mui/material';
import React from 'react';
import { StyledContainer } from '../Styles';
import OrderDetails from './OrderDetails';
import OrderItem from './OrderItem';

const MyOrders = () => {
  return (
    <StyledContainer>
      <Typography variant="h2">My Orders</Typography>
      <OrderItem />
      <OrderDetails />
    </StyledContainer>
  );
};

export default MyOrders;
