import { Stack } from '@mui/system';
import React from 'react';
import AddressCard from '../../AddressCard';
import { StyledContainer } from '../Styles';
import ContactCard from './ContactCard';
import InputField from './InputField';
import { useSelector } from 'react-redux';
import { useGetProfileQuery } from '../../../store/features/user/userApi';

function Profile() {
  const authUser = useSelector((state) => state?.auth?.user);
  const { data: profileData } = useGetProfileQuery(undefined, {
    skip: !authUser
  });
  return (
    <Stack spacing={3}>
      <InputField profileData={profileData} />
      <ContactCard profileData={profileData} />
      <StyledContainer sx={{ boxShadow: 3 }}>
        <AddressCard label="Address" profileData={profileData} />
      </StyledContainer>
    </Stack>
  );
}

export default Profile;
