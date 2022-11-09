import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const HeaderContainerStyle = styled(Box)(() => ({
  margin: '70px 0',
  textAlign: 'center'
}));

export const HeaderStyle = styled(Box)(() => ({
  h1: {
    fontSize: '38px',
    fontWeight: '700',
    padding: '20px 0'
  }
}));

export const SectionHeaderStyle = styled(Typography)(() => ({
  fontSize: '32px',
  margin: '70px 0 30px'
}));
