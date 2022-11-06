import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Address from './items/Address';
import Contact from './items/Contact';
import CheckoutTable from './items/table';

function Checkout() {
  return (
    <Container sx={{ paddingTop: 14, marginTop: -12 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5} md={7} lg={8}>
          <Contact text="1" />
          <Address label="Billing Address" text="2" />
        </Grid>
        <Grid item xs={12} sm={7} md={5} lg={4}>
          <CheckoutTable />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Checkout;
