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

function OrderDetails() {
  return (
    <>
      <Typography variant="h3">Order Details - CDDSGG445</Typography>
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
                      <StyledTableCell>Total</StyledTableCell>
                      <StyledTableCell>$153.00</StyledTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </StyledBox>
          </Grid>
        </Grid>
      </StyledOrderBox>
    </>
  );
}

export default OrderDetails;
