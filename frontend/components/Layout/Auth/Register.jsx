import { Dialog, Divider, Link, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSignupMutation } from '../../../store/features/auth/authApi';
import CloseBtn from './CloseBtn';
import FormBtn from './FormBtn';
import Header from './Header';
import {
  CloseContainer,
  ContainerStyle,
  FormContainer,
  InputContainer,
  InputLabelStyle
} from './Styles';

const Register = ({ open, handleClickOpen, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [signup, { data, isLoading, error: responseError, isSuccess }] =
    useSignupMutation();
  const [error, setError] = useState('');
  // console.log({data,isLoading,isSuccess,responseError, error})
  const toggleLogin = () => {
    handleClose();
    handleClickOpen();
  };

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError?.data?.error?.message);
      alert(responseError?.data?.error?.message);
    }
    if (data?.jwt && data?.user) {
      /**
       * TODO: later redirect home page
       */
      alert('Successfully Registered');
      handleClose();
    }
  }, [data, responseError]);

  //Handle Form =========================
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset
  } = useForm({
    mode: 'onBlur',
    defaultValues: { username: '', email: '', password: '', phone: '' }
  });

  const onSubmit = (data) => {
    signup({ data });
    if (isSuccess) {
      reset();
      handleClose();
    }
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
        <Header subtitle={'By signing up, you agree to our terms & policy'} />
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <InputContainer>
                  <InputLabelStyle variant="h4">Username</InputLabelStyle>
                  <TextField
                    fullWidth
                    name="username"
                    label={'Username'}
                    error={Boolean(errors.username)}
                    {...register('username', {
                      required: 'Username is required'
                    })}
                    helperText={errors.username?.message}
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
                    error={Boolean(errors.email)}
                    {...register('email', {
                      required: 'Email is required'
                    })}
                    helperText={errors.email?.message}
                  />
                </InputContainer>
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <InputContainer>
                  <InputLabelStyle variant="h4">Phone</InputLabelStyle>
                  <TextField
                    fullWidth
                    name="phone"
                    label={'phone'}
                    error={Boolean(errors.phone)}
                    {...register('phone', { required: 'phone is required' })}
                    helperText={errors.phone?.message}
                    type={'text'}
                    {...field}
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
                      required: 'Password is required'
                    })}
                    {...field}
                    helperText={errors.password?.message}
                  />
                </InputContainer>
              )}
            />
            <InputContainer>
              <FormBtn disabled={isLoading}>Register</FormBtn>
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
