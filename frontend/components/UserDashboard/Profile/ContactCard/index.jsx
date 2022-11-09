import { InputLabel, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import ContactModal from '../../../shared/Modals/ContactModal';
import { StyledContainer } from '../../Styles';

// const initialValues = {
//   phone: ''
// };
function ContactCard({ profileData }) {
  const [formValue, setFormValue] = useState('');

  // state lifting starts==========
  const getData = (data) => {
    setFormValue(data);
  };
  useEffect(() => {
    if (profileData) {
      setFormValue(profileData?.phone);
    }
  }, [profileData]);
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
        id="phone"
        fullWidth
        placeholder="+8801..."
        name="phone"
        disabled
      />
    </StyledContainer>
  );
}

export default ContactCard;
