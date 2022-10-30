import styled from '@emotion/styled';
import { Box, Link as MLink, ListItem } from '@mui/material';
import myShadows from '../../../src/theme/shadows';

export const StyledLink = styled(MLink)(({ theme, active }) => ({
  color: active
    ? `${theme.palette.primary.main}`
    : `${theme.palette.text.primary}`,
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '24px',
  cursor: 'pointer',
  '&:hover': {
    color: `${theme.palette.primary.main}`,
  },
}));

export const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  margin: '10px 0px',
  padding: '10px',
  borderLeft: `3px solid ${theme.palette.background.paper}`,
  cursor: 'pointer',
  borderLeft: active
    ? `3px solid ${theme.palette.primary.main}`
    : '3px solid transparent',
  '&:hover': {
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
}));
export const StyledContainer = styled(Box)(({ theme }) => ({
  margin: 0,
  border: 'none',
  borderRadius: '8px',
  boxShadow: `${theme.shadows[4]}`,
  backgroundColor: `${theme.palette.background.default}`,
  boxShadow: myShadows.common,
  [theme.breakpoints.down('md')]: {
    // position: 'fixed',
  },
}));
