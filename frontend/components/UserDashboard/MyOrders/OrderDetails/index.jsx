import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { StyledTableCell } from '../OrderItem/Styles';
import { StyledBox, StyledOrderBox } from './Styles';

function OrderDetails({ selectedOrder }) {
  const totalPrice = selectedOrder?.attributes?.cart?.data?.reduce(
    (acc, curr) =>
      acc +
      (curr?.attributes?.variant?.data?.attributes?.price || 0) *
        curr?.attributes?.quantity,
    0
  );

  return selectedOrder ? (
    <>
      <Typography variant="h3">Order Details - #{selectedOrder?.id}</Typography>
      <StyledOrderBox>
        <Grid container spacing={6}>
          <Grid item sm={12} md={6}>
            <Box margin="15px">
              <Typography variant="subtitle1">Billing Address</Typography>
              <Typography variant="body2">
                2148 Straford Park, KY, Winchester, 40391, United States
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <StyledBox>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Sub Total</TableCell>
                      <TableCell>${totalPrice}</TableCell>
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
                      <TableCell>$0.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>Total</StyledTableCell>
                      <StyledTableCell>${totalPrice}</StyledTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </StyledBox>
          </Grid>
        </Grid>
      </StyledOrderBox>
    </>
  ) : (
    'No Order Select'
  );
}

export default OrderDetails;
