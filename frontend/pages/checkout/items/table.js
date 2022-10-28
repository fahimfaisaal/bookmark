import { Divider, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';

const CheckoutTable = () => {
  return (
    <Container>
      <Typography marginBottom={4} textAlign={'center'} variant="h3">
        Your Order
      </Typography>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        spacing={3}
        sx={{ marginBottom: 1 }}
      >
        <Typography variant="body2">
          <Typography variant="span" sx={{ fontWeight: 700 }}>
            {' '}
            1{' '}
          </Typography>
          x Apples | 1lb
        </Typography>
        <Typography variant="body2">$1.60</Typography>
      </Stack>

      <Divider />
      <Stack
        direction={'row'}
        justifyContent="space-between"
        spacing={3}
        sx={{ marginTop: 1 }}
      >
        <Typography variant="body2">Sub Total</Typography>
        <Typography variant="body2">$1.60</Typography>
      </Stack>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        spacing={3}
        sx={{ marginBottom: 1 }}
      >
        <Typography variant="body2">Tax</Typography>
        <Typography variant="body2">Calculated at checkout</Typography>
      </Stack>
    </Container>
  );
};

export default CheckoutTable;
