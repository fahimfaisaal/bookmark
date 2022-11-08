import { Link, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import myShadows from '../../src/theme/shadows';

export const ContainerStyle = styled(Box)(({ theme }) => ({
  boxShadow: `${myShadows.box}`,
  //   boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  boxSizing: `${theme.shadows[2]}`,
  borderRadius: '10px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // width: '318px',
  width: '90%',
  padding: '10px 0px',
  backgroundColor: `${
    theme.mode === 'dark'
      ? `${theme.palette.background.dark}`
      : `${theme.palette.background.main}`
  }`
}));

export const InnerContainerStyle = styled(Box)(({ theme, style }) => ({
  //   display: 'flex',
  //   alignItems: 'center',
  //   height: 'auto',
  //   width: '288px',
  //   margin: '0px 36px',
  //   ...style,
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
