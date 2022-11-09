import { Grid, InputLabel } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import * as React from 'react';
import AddressModal from '../../../components/shared/Modals/AddressModal';
import { StyledContainer } from '../../../components/UserDashboard/Styles';
import { StyledTypo } from './Styles';

function Address({ label, text }) {
  const [formValue, setFormValue] = React.useState('');

  // state lifting starts==========
  const getData = (data) => {
    setFormValue(data);
  };
  // state lifting ends==========
  return (
    <StyledContainer sx={{ boxShadow: 5, marginTop: 3 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <InputLabel color="secondary">
          {' '}
          <StyledTypo component="span">{text}</StyledTypo> {label}
        </InputLabel>

        <AddressModal getData={getData} btnText="+ Update" />
      </Stack>
      <Grid container sx={{}}>
        <Grid item>
          <Card
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid #009F7F'
            }}
          >
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
    </StyledContainer>
  );
}

export default Address;
