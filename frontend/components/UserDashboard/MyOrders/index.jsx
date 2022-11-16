import { Box, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useGetOrdersQuery } from '../../../store/features/orders/ordersApi';
import OrderDetails from './OrderDetails';
import OrderItem from './OrderItem';
import ProgressBar from './ProgressBar';
import { StyledGrid } from './Styles';

function MyOrders() {
  const { data: usersOrders } = useGetOrdersQuery({ usersId: 85 });
  console.log({ usersOrders });
  let totalPrice = 0;
  return (
    <Grid container spacing={2} sx={{ marginTop: 0.5 }}>
      <StyledGrid item xs={12} sm={12} md={12} lg={4}>
        <Typography variant="h2" paddingBottom={2}>
          My Orders
        </Typography>
        <Stack spacing={2} sx={{ overflow: 'auto', height: '70%' }}>
          {usersOrders?.data?.map((order) => {
            order?.attributes?.usersId?.data?.attributes?.carts?.data?.map(
              (p) => {
                const price = p?.attributes?.variant?.data?.attributes?.price;
                console.log(price);
              }
            );
            console.log({ totalPrice, order });
            return (
              <Box key={order.id}>
                <OrderItem
                  orderId={order?.attributes?.id}
                  status={order?.attributes?.status}
                  deliveryTime={order?.attributes?.placedOn}
                  orderDate={new Date(
                    order?.attributes?.createdAt
                  ).toLocaleDateString()}
                />
              </Box>
            );
          })}
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
