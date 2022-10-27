import { Stack } from '@mui/system';
import React from 'react';
import AddressCard from '../../AddressCard';
import { StyledContainer } from '../Styles';
import ContactCard from './ContactCard';
import InputField from './InputField';

const Profile = () => {
  return (
    <Stack spacing={3}>
      <InputField />
      <ContactCard />
      <StyledContainer>
        <AddressCard />
      </StyledContainer>
    </Stack>
  );
};

export default Profile;
