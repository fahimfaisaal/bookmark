import { InputLabel, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { StyledContainer } from '../../Styles';
import Modal from '../Modal';

const ContactCard = () => {
  return (
    <StyledContainer>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems="center"
        flexWrap={'wrap'}
      >
        <InputLabel color="secondary">Contact Number</InputLabel>
        <>
          <Modal btnText="+ Update" />
        </>
      </Stack>
      <TextField fullWidth placeholder="+8801..." id="fullWidth" />
    </StyledContainer>
  );
};

export default ContactCard;
