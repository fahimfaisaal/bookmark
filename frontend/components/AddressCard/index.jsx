import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, InputLabel } from '@mui/material';
import { Stack } from '@mui/system';
import AddressModal from '../shared/Modals/AddressModal';
const AddressCard = ({ billingAddress, label }) => {
  const [formValue, setFormValue] = React.useState('');

  //state lifting starts==========
  const getData = (data) => {
    setFormValue(data);
  };
  //state lifting ends==========
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
          <AddressModal getData={getData} btnText="+ Update" />
        </>
      </Stack>
      <Grid container>
        <Grid item>
          <Card sx={{ backgroundColor: 'background.default' }}>
            <CardContent>
              <Typography variant="h3" component="div">
                {formValue.title ? formValue.title : 'Billing'}
              </Typography>
              <Typography variant="caption">
                {formValue.address
                  ? formValue.address
                  : '2231 Kidd Avenue, Ak, Kipnuk, 99614, United States'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AddressCard;
