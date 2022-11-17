import { Box, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetOrdersQuery } from '../../../store/features/orders/ordersApi';
import { NoOrderItemFound } from '../../Layout/NavBar/NoDataItemFound';
import OrderDetails from './OrderDetails';
import OrderItem from './OrderItem';
import ProgressBar from './ProgressBar';
import { StyledGrid } from './Styles';

function MyOrders() {
  const [selectedOrder, setSelectOrder] = useState();
  const authUser = useSelector((state) => state?.auth?.user);
  const { data: usersOrders } = useGetOrdersQuery({ usersId: authUser?.id });

  console.log({ selectedOrder });
  return (
    <Grid container spacing={2} sx={{ marginTop: 0.5 }}>
      <StyledGrid item xs={12} sm={12} md={12} lg={4}>
        <Typography variant="h2" paddingBottom={2}>
          My Orders
        </Typography>
        <Stack spacing={2} sx={{ overflow: 'auto', height: '70%' }}>
          {usersOrders?.data?.length > 0 ? (
            usersOrders?.data?.map((order) => {
              return (
                <Box key={order.id} onClick={() => setSelectOrder(order)}>
                  <OrderItem
                    orderId={order?.id}
                    status={order?.attributes?.status}
                    deliveryTime={order?.attributes?.placedOn}
                    orderDate={new Date(
                      order?.attributes?.createdAt
                    ).toLocaleDateString()}
                  />
                </Box>
              );
            })
          ) : (
            <NoOrderItemFound
              imgSrc={'/images/notfound/empty-order.webp'}
              btnText={'Go To Shopping'}
              url={'/books'}
            />
          )}
        </Stack>
      </StyledGrid>
      <StyledGrid item xs={12} sm={12} md={12} lg={7}>
        <OrderDetails selectedOrder={selectedOrder} />
        <ProgressBar status={selectedOrder?.attributes?.status} />
      </StyledGrid>
    </Grid>
  );
}

export default MyOrders;
