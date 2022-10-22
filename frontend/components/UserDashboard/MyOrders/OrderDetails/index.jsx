import { TableCell, TableRow, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { StyledContainer } from '../../Styles';

const OrderDetails = () => {
  return (
    <StyledContainer>
      <Typography variant="h3">Order Details - CDDSGG445</Typography>
      <Stack>
        <Box>
          <Typography variant="subtitle1">Billing Address</Typography>
          <Typography variant="body2">
            2148 Straford Park, KY, Winchester, 40391, United States
          </Typography>
        </Box>
        <Box>
          <TableRow>
            <TableCell>Sub Total</TableCell>
            <TableCell>$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Discount</TableCell>
            <TableCell>$0.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delivery Fee</TableCell>
            <TableCell>$0.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell>$3.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>$153.00</TableCell>
          </TableRow>
        </Box>
      </Stack>
    </StyledContainer>
  );
};

export default OrderDetails;
