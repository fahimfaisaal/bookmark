import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { StyledContainer } from '../Styles';
const ChangePassword = () => {
  return (
    <>
      <StyledContainer>
        <Typography variant="h2">Change Password</Typography>

        <InputLabel color="secondary" htmlFor="old-pass">
          Old Password
        </InputLabel>
        <TextField fullWidth placeholder="*********" id="old-pass" />

        <InputLabel color="secondary" htmlFor="new-pass">
          New Password
        </InputLabel>
        <TextField fullWidth placeholder="*********" id="new-pass" />

        <InputLabel color="secondary" htmlFor="confirm-pass">
          Confirm Password
        </InputLabel>
        <TextField fullWidth placeholder="*********" id="confirm-pass" />

        <Box textAlign={'right'}>
          <Button variant="btnGreen">Submit</Button>
        </Box>
      </StyledContainer>
    </>
  );
};

export default ChangePassword;
