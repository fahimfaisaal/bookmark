import { Grid, InputLabel } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import AddressModal from '../shared/Modals/AddressModal';

function AddressCard({ label, profileData }) {
  const [formValue, setFormValue] = useState('');

  // state lifting starts==========
  const getData = (data) => {
    setFormValue(data);
  };
  useEffect(() => {
    if (profileData) {
      setFormValue(profileData?.address);
    }
  }, [profileData]);
  // state lifting ends==========
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <InputLabel color="secondary"> {label}</InputLabel>
        <AddressModal getData={getData} btnText="+ Update" />
      </Stack>
      <Grid container>
        <Grid item sx={{ minWidth: '220px' }}>
          <Card sx={{ backgroundColor: 'background.default' }}>
            <CardContent>
              <Typography variant="h3" component="div">
                {'Billing'}
              </Typography>
              <Typography variant="caption">
                {formValue
                  ? formValue
                  : '2231 Kidd Avenue, Ak, Kipnuk, 99614, United States'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default AddressCard;
