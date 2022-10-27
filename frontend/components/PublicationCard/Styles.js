import { Link } from '@mui/material';
import { Box, styled } from '@mui/system';
import myShadows from '../../src/theme/shadows';

export const ContainerStyle = styled(Box)(({ theme }) => ({
  boxShadow: `${myShadows.box}`,
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '20px',
  margin: '20px 0',
}));

export const LogoContainer = styled(Box)(() => ({
  width: '70px',
  height: '70px',
  img: {
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    borderRadius: '50%',
  },
}));

export const LinkContainer = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '17px',
  padding: '0 4px',
  color: `${theme.palette.text.secondary}`,
  '&:hover': {
    color: `${theme.palette.primary.main}`,
  },
}));
