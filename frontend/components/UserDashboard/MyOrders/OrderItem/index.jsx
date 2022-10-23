import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { StyledOrder, StyledTableCell, StyledTableContainer } from './Styles';

const OrderItem = () => {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Order
              <Typography component="span">#66</Typography>
            </TableCell>
            <TableCell>
              <Button variant="btnOrder">Order Received</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Order Date :</TableCell>
            <TableCell>January 12, 2022</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delivery Time :</TableCell>
            <TableCell>Express Delivery</TableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>Amount :</StyledTableCell>
            <StyledTableCell>$150.00</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>Total Price :</StyledTableCell>
            <StyledTableCell>$153.00</StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default OrderItem;
