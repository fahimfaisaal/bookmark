import { Link, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import myShadows from '../../src/theme/shadows';

export const ContainerStyle = styled(Box)(({ theme }) => ({
  boxShadow: `${myShadows.box}`,
  boxSizing: `${theme.shadows[2]}`,
  borderRadius: '10px',
  width: '90%',
  padding: '10px 0px',
  backgroundColor: `${
    theme.mode === 'dark'
      ? `${theme.palette.background.dark}`
      : `${theme.palette.background.main}`
  }`
}));

export const InnerContainerStyle = styled(Box)(() => ({
  padding: '10px 20px'
}));

export const LinkContainer = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  fontWeight: '600',
  padding: '4px 4px',
  align: 'right',
  textDecoration: 'none',
  color: `${theme.palette.text.secondary}`,
  '&:hover': {
    color: `${theme.palette.primary.main}`
  }
}));

export const FilterTitleStyle = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: '700'
}));
