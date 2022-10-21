import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Address from './Address';
import ContactCard from './ContactCard';
import InputField from './InputField';

const Profile = () => {
  return (
    <Stack spacing={3}>
      <InputField />
      <ContactCard />
      <Address />
    </Stack>
  );
};

export default Profile;
