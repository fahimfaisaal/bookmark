import { Link } from '@mui/material';
import { Box, styled } from '@mui/system';
import myShadows from '../../src/theme/shadows';

export const ContainerStyle = styled(Box)(() => ({
  boxShadow: `${myShadows.box}`,
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '20px',
  margin: '20px 0'
}));

export const LogoContainer = styled(Box)(() => ({
  width: '70px',
  height: '70px',
  img: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%'
  }
}));

export const LinkContainer = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '17px',
  padding: '0 4px',
  color: `${theme.palette.text.secondary}`,
  '&:hover': {
    color: `${theme.palette.primary.main}`
  }
}));
