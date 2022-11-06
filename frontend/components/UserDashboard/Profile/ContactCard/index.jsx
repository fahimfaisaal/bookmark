import { InputLabel, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import ContactModal from '../../../shared/Modals/ContactModal';
import { StyledContainer } from '../../Styles';

function ContactCard() {
  const [formValue, setFormValue] = useState('');

  // state lifting starts==========
  const getData = (data) => {
    setFormValue(data);
  };
  // state lifting ends==========

  return (
    <StyledContainer sx={{ boxShadow: 3 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <InputLabel htmlFor="contact" color="secondary">
          Contact Number
        </InputLabel>

        <ContactModal getData={getData} btnText="+ Update" />
      </Stack>
      <TextField
        sx={{ marginBottom: 1.6 }}
        value={formValue}
        id="contact"
        fullWidth
        placeholder="+8801..."
        name="contact"
        disabled
      />
    </StyledContainer>
  );
}

export default ContactCard;
