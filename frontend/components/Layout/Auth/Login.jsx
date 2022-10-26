import { Divider, Link, Stack, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import CloseBtn from './CloseBtn';
import FormBtn from './FormBtn';
import Header from './Header';
import InputGroup from './InputGroup';
import {
  CloseContainer,
  ContainerStyle,
  FormContainer,
  IconContainer,
  InputContainer,
} from './Styles';

const Login = ({ open, handleClickOpen, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const toggleRegister = () => {
    handleClose();
    handleClickOpen();
  };

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
          <InputContainer>
            <InputGroup label={'Email'} type={'email'} />
          </InputContainer>

          <InputContainer>
            <InputGroup label={'Password'} type={'password'} />
          </InputContainer>

          <InputContainer>
            <FormBtn>Login</FormBtn>
          </InputContainer>
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
