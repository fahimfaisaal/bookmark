import { FormGroup, Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const ContainerStyle = styled(Box)(({ theme }) => ({
  width: '550px',
  padding: '40px',
  overflow: 'hidden',
  position: 'responsive',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}));

export const FormContainer = styled(FormGroup)(() => ({
  margin: '20px auto'
}));

export const InputContainer = styled(Box)(() => ({
  padding: '10px 0px'
}));

export const DialogHeader = styled(Stack)(() => ({
  direction: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const InputLabelStyle = styled(Typography)(({ theme }) => ({
  padding: '8px 0',
  color: `${theme.palette.text.primary}`,
  fontSize: '17px'
}));

export const IconContainer = styled(Box)(() => ({
  fontSize: '15px',
  marginBottom: '-6px'
}));

export const CloseContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));
