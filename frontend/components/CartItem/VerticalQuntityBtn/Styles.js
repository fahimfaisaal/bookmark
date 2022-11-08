import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const ContainerStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0px',
  alignItems: 'center',
  borderRadius: '20px',
  padding: '2px 12px',
  background: `${theme.palette.background.dark}`
}));

export const BtnContainerStyle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  cursor: 'pointer'
}));

export const QntContainerStyle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  marginTop: '5px'
}));
