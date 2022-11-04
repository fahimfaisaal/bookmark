import { Divider, Link, Stack, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import CloseBtn from './CloseBtn';
import FormBtn from './FormBtn';
import Header from './Header';
import {
  CloseContainer,
  ContainerStyle,
  FormContainer,
  IconContainer,
  InputContainer,
  InputLabelStyle,
} from './Styles';
import { useForm, Controller } from 'react-hook-form';
import { useLoginMutation } from '../../../store/features/auth/authApi';
import { useState, useEffect } from 'react';

const Login = ({ open, handleClickOpen, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [login, { data, isLoading,isSuccess, error: responseError }] = useLoginMutation()
  const [error, setError] = useState("");
  // console.log({data,isLoading,isSuccess,responseError, error})

  const toggleRegister = () => {
    handleClose();
    handleClickOpen();
  };

  useEffect(() => {
    if (responseError?.data) {
        setError(responseError?.data?.error?.message);
        alert(responseError?.data?.error?.message)
    }
    if (data?.jwt && data?.user) {
       
       /**
        * TODO: later redirect home page
        */
        alert("Successfully Registered")
        handleClose();

    }
}, [data, responseError]);

  //Handle Form =========================
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
  } = useForm({ mode: 'onBlur' });
  const onSubmit = (data) => {
    login({data})
    reset();
  };
  //Handle Form =========================

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      scroll="body"
    >
      <ContainerStyle>
        <Header subtitle={'Login with your email & password'} />

        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="identifier"
              control={control}
              render={({ field }) => (
                <InputContainer>
                  <InputLabelStyle variant="h4">Email/Username</InputLabelStyle>
                  <TextField
                    fullWidth
                    name="identifier"
                    label={'Email/Username'}
                    type={'text'}
                    {...field}
                    error={Boolean(errors.identifier)}
                    {...register('identifier', { required: 'identifier is required' })}
                    helperText={errors.identifier?.message}
                  />
                </InputContainer>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputContainer>
                  <InputLabelStyle variant="h4">Password</InputLabelStyle>
                  <TextField
                    fullWidth
                    name="password"
                    label={'Password'}
                    type={'password'}
                    error={Boolean(errors.password)}
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    {...field}
                    helperText={errors.password?.message}
                  />
                </InputContainer>
              )}
            />
            <InputContainer>
              <FormBtn>Login</FormBtn>
            </InputContainer>
          </form>
        </FormContainer>
        <Divider>Or</Divider>
        <InputContainer>
          <FormBtn color={`secondary`}>
            <Stack
              direction={'row'}
              gap={'10px'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <IconContainer>
                <BsGoogle />
              </IconContainer>

              <Box> Login with Google</Box>
            </Stack>
          </FormBtn>

          <FormBtn color={'info'}>
            <Stack
              direction={'row'}
              gap={'10px'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <IconContainer>
                <FaFacebookF />
              </IconContainer>

              <Box>Login with FaceBook</Box>
            </Stack>
          </FormBtn>
        </InputContainer>
        <Divider />
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'5px'}
          my={3}
        >
          <Typography variant="body1">Don't have any account?</Typography>
          <Link sx={{ cursor: 'pointer' }} onClick={toggleRegister}>
            Register
          </Link>
        </Stack>
        <CloseContainer>
          <CloseBtn onClick={handleClose} />
        </CloseContainer>
      </ContainerStyle>
    </Dialog>
  );
};

export default Login;
