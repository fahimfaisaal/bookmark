import { InputLabel, TextField } from '@mui/material';
import React from 'react';
import { StyledContainer } from '../../Styles';

const ContactCard = () => {
  return (
    <StyledContainer>
      <InputLabel color="secondary">Contact Number</InputLabel>
      <TextField fullWidth placeholder="+8801..." id="fullWidth" />
    </StyledContainer>
  );
};

export default ContactCard;
