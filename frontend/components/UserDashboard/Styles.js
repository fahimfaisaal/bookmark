import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import myShadows from '../../src/theme/shadows';

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  border: 'none',
  borderRadius: '8px',
  padding: '30px',
  backgroundColor: `${theme.palette.background.default}`,
  boxShadow: myShadows.common,
}));
export const StyledGrid = styled(Grid)(({ theme }) => ({
  // backgroundColor: `${theme.palette.background.default}`,
}));
