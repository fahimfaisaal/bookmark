import AddCardIcon from '@mui/icons-material/AddCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { StyledContainer } from '../../../components/UserDashboard/Styles';
import { StyledBtn } from '../../../styles/checkoutItemsStyles';

function Payment() {
  return (
    <StyledContainer sx={{ marginTop: 1 }}>
      <Typography variant="h3">Choose Payment Method</Typography>
      <StyledBtn>stripe</StyledBtn>
      <Stack direction="column" spacing={1} justifyContent="space-between">
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddCardIcon />
              </InputAdornment>
            )
          }}
          variant="standard"
          placeholder="card no"
        />
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonthIcon />
              </InputAdornment>
            )
          }}
          variant="standard"
          placeholder="mm/yy CVC"
        />
      </Stack>
      <Button variant="btnOrder">Confirm</Button>
    </StyledContainer>
  );
}

export default Payment;
