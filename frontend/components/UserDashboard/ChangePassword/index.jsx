import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { StyledContainer } from './Styles';
const ChangePassword = () => {
  return (
    <>
      <StyledContainer sx={{ boxShadow: 3 }}>
        <Typography variant="h2">Change Password</Typography>

        <InputLabel color="secondary" htmlFor="old-pass">
          Old Password
        </InputLabel>
        <TextField
          size="small"
          fullWidth
          placeholder="*********"
          id="old-pass"
        />

        <InputLabel color="secondary" htmlFor="new-pass">
          New Password
        </InputLabel>
        <TextField
          size="small"
          fullWidth
          placeholder="*********"
          id="new-pass"
        />

        <InputLabel color="secondary" htmlFor="confirm-pass">
          Confirm Password
        </InputLabel>
        <TextField
          size="small"
          fullWidth
          placeholder="*********"
          id="confirm-pass"
        />

        <Box textAlign={'right'}>
          <Button variant="btnGreen">Submit</Button>
        </Box>
      </StyledContainer>
    </>
  );
};

export default ChangePassword;
