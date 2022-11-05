import { Stack } from '@mui/system';
import React from 'react';
import AddressCard from '../../AddressCard';
import { StyledContainer } from '../Styles';
import ContactCard from './ContactCard';
import InputField from './InputField';

function Profile() {
  return (
    <Stack spacing={3}>
      <InputField />
      <ContactCard />
      <StyledContainer sx={{ boxShadow: 3 }}>
        <AddressCard label="Address" />
      </StyledContainer>
    </Stack>
  );
}

export default Profile;
