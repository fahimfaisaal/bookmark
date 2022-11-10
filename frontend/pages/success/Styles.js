import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
export const ContainerStyle = styled(Box)(({ theme }) => ({
  width: '60%',
  background: `${theme.palette.background.paper}`,
  textAlign: 'center',
  padding: '30px 20px',
  margin: '50px auto',
  borderRadius: '10px'
}));

export const IconStyle = styled(Box)(({ theme }) => ({
  fontSize: '30px',
  color: `${theme.palette.success.main}`
}));

export const HeaderStyle = styled(Typography)(() => ({
  fontWeight: 800,
  fontSize: '36px',
  padding: '5px 0',
  textTransform: 'capitalize'
}));
