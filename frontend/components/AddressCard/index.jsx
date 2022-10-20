import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const AddressCard = ({ billingAddress }) => {
  return (
    <Card sx={{ width: 275, margin: '5px' }}>
      <CardContent>
        <Typography variant="h3" component="div">
          Billing
        </Typography>
        <Typography variant="caption">
          2231 Kidd Avenue, Ak, Kipnuk, 99614, United States
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
