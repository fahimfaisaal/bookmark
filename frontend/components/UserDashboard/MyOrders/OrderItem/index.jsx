import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { StyledTableContainer } from './Styles';

function OrderItem({ orderId, status, deliveryTime, orderDate }) {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Order
              <Typography component="span"> #{orderId}</Typography>
            </TableCell>
            <TableCell>
              <Button variant="btnOrder">{status}</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Order Date :</TableCell>
            <TableCell>{orderDate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delivery Time :</TableCell>
            <TableCell>{deliveryTime}</TableCell>
          </TableRow>
          {/* <TableRow>
            <StyledTableCell>Amount :</StyledTableCell>
            <StyledTableCell>$150.00</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>Total Price :</StyledTableCell>
            <StyledTableCell>$153.00</StyledTableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default OrderItem;
