import { TextField } from '@mui/material';
import React from 'react';
import { InputLabelStyle } from './Styles';

const InputGroup = ({ label, type, field }) => {
  const name = String(label).toLowerCase();
  return (
    <>
      <InputLabelStyle variant="h4">{label}</InputLabelStyle>
      <TextField fullWidth name={name} type={type} />
    </>
  );
};

export default InputGroup;
