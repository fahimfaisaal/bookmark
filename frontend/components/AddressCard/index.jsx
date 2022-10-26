import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
const AddressCard = ({ billingAddress }) => {
  return (
    <Grid container>
      <Grid item>
        <Card sx={{ backgroundColor: 'background.default' }}>
          <CardContent>
            <Typography variant="h3" component="div">
              Billing
            </Typography>
            <Typography variant="caption">
              2231 Kidd Avenue, Ak, Kipnuk, 99614, United States
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddressCard;
