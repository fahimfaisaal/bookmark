import { InputLabel, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Modal from '../../../components/UserDashboard/Profile/Modal';
import { StyledContainer } from '../../../components/UserDashboard/Styles';
import { StyledTypo } from './Styles';

const Contact = ({ text }) => {
  return (
    <StyledContainer sx={{ boxShadow: 5 }}>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems="center"
        flexWrap={'wrap'}
      >
        <InputLabel color="secondary">
          {' '}
          <StyledTypo component={'span'}>{text}</StyledTypo> Contact Number
        </InputLabel>

        <>
          <Modal btnText="+ Update" />
        </>
      </Stack>
      <TextField size="small" fullWidth placeholder="+8801..." id="fullWidth" />
    </StyledContainer>
  );
};

export default Contact;
