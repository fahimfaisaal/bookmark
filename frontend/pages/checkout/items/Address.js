import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, InputLabel } from '@mui/material';
import { Stack } from '@mui/system';
import Modal from '../../../components/AddressCard/Modal';
import { StyledContainer } from '../../../components/UserDashboard/Styles';
import { StyledTypo } from './Styles';
const Address = ({ billingAddress, label, text }) => {
  return (
    <StyledContainer sx={{ boxShadow: 5, marginTop: 3 }}>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems="center"
        flexWrap={'wrap'}
      >
        <InputLabel color="secondary">
          {' '}
          <StyledTypo component={'span'}>{text}</StyledTypo> {label}
        </InputLabel>
        <>
          <Modal btnText="+ Update" />
        </>
      </Stack>
      <Grid container sx={{}}>
        <Grid item>
          <Card
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid #009F7F',
            }}
          >
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
    </StyledContainer>
  );
};

export default Address;
