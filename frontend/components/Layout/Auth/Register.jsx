import { Dialog, Divider, Link, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from '@mui/system';
import React from 'react';
import CloseBtn from './CloseBtn';
import FormBtn from './FormBtn';
import Header from './Header';
import {
  CloseContainer,
  ContainerStyle,
  FormContainer,
  InputContainer,
  InputLabelStyle,
} from './Styles';
import { useForm, Controller } from 'react-hook-form';

const Register = ({ open, handleClickOpen, handleClose }) => {
  const toggleLogin = () => {
    handleClose();
    handleClickOpen();
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  //Handle Form =========================
  const {
    handleSubmit,
    control,
    formState: { touchedFields, errors },
    register,
    reset,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: { name: '', email: '', password: '' },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log('[Errors]', errors);
  // console.log('[Touched]', touchedFields);
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
        <Header subtitle={'By signing up, you agree to our terms & policy'} />
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input
              {...register('firstName', { required: true })}
              aria-invalid={errors.firstName ? 'true' : 'false'}
            />
            {errors.firstName?.type === 'required' && (
              <p role="alert">First name is required</p>
            )} */}
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <InputContainer>
                  <InputLabelStyle variant="h4">Name</InputLabelStyle>
                  <TextField
                    fullWidth
                    name="name"
                    label={'Name'}
                    error={errors.name}
                    {...register('name', { required: true })}
                    type={'text'}
                    {...field}
                  />
                </InputContainer>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputContainer>
                  <InputLabelStyle variant="h4">Email</InputLabelStyle>
                  <TextField
                    fullWidth
                    name="email"
                    label={'Email'}
                    type={'email'}
                    {...field}
                    error={errors.email}
                    {...register('email', { required: true })}
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
                    error={errors.password}
                    {...register('password', { required: true })}
                    {...field}
                  />
                </InputContainer>
              )}
            />
            <InputContainer>
              <FormBtn>Register</FormBtn>
            </InputContainer>
          </form>
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
