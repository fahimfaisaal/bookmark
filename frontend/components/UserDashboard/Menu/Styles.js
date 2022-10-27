import styled from '@emotion/styled';
import { Box, Link as MLink } from '@mui/material';
import myShadows from '../../../src/theme/shadows';

export const StyledLink = styled(MLink)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '24px',
  cursor: 'pointer',
  // borderLeft: `1px solid black`,
  '&:hover': {
    color: `${theme.palette.primary.main}`,
  },
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
  border: 'none',
  borderRadius: '8px',
  backgroundColor: `${theme.palette.background.paper}`,
  boxShadow: myShadows.common,
}));
