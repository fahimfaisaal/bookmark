import { InputLabel, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import ContactModal from '../../../components/shared/Modals/ContactModal';
import { StyledContainer } from '../../../components/UserDashboard/Styles';
import { StyledTypo } from '../../../styles/checkoutItemsStyles';

function Contact({ text }) {
  const [formValue, setFormValue] = useState('');

  // state lifting starts==========
  const getData = (data) => {
    setFormValue(data);
  };
  // state lifting ends==========
  return (
    <StyledContainer sx={{ boxShadow: 5 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <InputLabel color="secondary">
          <br />
          <StyledTypo component="span">{text}</StyledTypo>
          <br />
          <span>Contact Number</span>
        </InputLabel>

        <ContactModal getData={getData} btnText="+ Update" />
      </Stack>
      <TextField
        sx={{ marginBottom: 1.6 }}
        value={formValue}
        id="contact"
        fullWidth
        size="small"
        placeholder="+8801..."
        name="contact"
        disabled
      />
    </StyledContainer>
  );
}

export default Contact;
