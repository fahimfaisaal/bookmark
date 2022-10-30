import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, InputLabel } from '@mui/material';
import { Stack } from '@mui/system';
import Modal from './Modal';
const AddressCard = ({ billingAddress, label }) => {
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems="center"
        flexWrap={'wrap'}
      >
        <InputLabel color="secondary"> {label}</InputLabel>
        <>
          <Modal btnText="+ Update" />
        </>
      </Stack>
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
    </>
  );
};

export default AddressCard;
