import { Dialog, Divider, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from '@mui/system';
import React from 'react';
import CloseBtn from './CloseBtn';
import FormBtn from './FormBtn';
import Header from './Header';
import InputGroup from './InputGroup';
import {
  CloseContainer,
  ContainerStyle,
  FormContainer,
  InputContainer,
} from './Styles';

const Register = ({ open, handleClickOpen, handleClose }) => {
  const toggleLogin = () => {
    handleClose();
    handleClickOpen();
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      scroll="body"
    >
      <ContainerStyle>
        <Header subtitle={'By signing up, you agree to our terms & policy'} />
        <FormContainer>
          <InputContainer>
            <InputGroup label={'Name'} type={'text'} />
          </InputContainer>
          <InputContainer>
            <InputGroup label={'Email'} type={'email'} />
          </InputContainer>
          <InputContainer>
            <InputGroup label={'Password'} type={'password'} />
          </InputContainer>
          <InputContainer>
            <FormBtn>Register</FormBtn>
          </InputContainer>
        </FormContainer>
        <Divider>Or</Divider>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'5px'}
          my={3}
        >
          <Typography variant="body1">Already have an account?</Typography>
          <Link sx={{ cursor: 'pointer' }} onClick={toggleLogin}>
            Login
          </Link>
        </Stack>
        <CloseContainer>
          <CloseBtn onClick={handleClose} />
        </CloseContainer>
      </ContainerStyle>
    </Dialog>
  );
};

export default Register;
