/** @format */

import { Link, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const ContainerStyle = styled(Box)(() => ({}));

export const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  marginBottom: '50px',
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '15px',
  },
}));

export const SectionHeaderStyle = styled(Typography)(() => ({
  padding: '15px 0',
  marginBottom: '15px',
}));

export const SectionContainer = styled(Box)(() => ({
  margin: '50px 0',
}));

export const SliderContainer = styled(Box)(() => ({
  padding: '10px',
}));

export const SeeAllLinkStyle = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  color: 'inherit',
  fontSize: '18px',
  fontWeight: '500',
  textDecoration: 'none',
  transition: 'all 0.4s',
  '&:hover': {
    color: `${theme.palette.text.third}`,
  },
}));
