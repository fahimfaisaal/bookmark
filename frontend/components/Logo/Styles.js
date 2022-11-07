import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StyledLogoText = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.logo}`,
  fontSize: '1.7rem',
  fontWeight: '700'
}));
export const StyledLogoMark = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  fontSize: '1.7rem',
  fontWeight: '700'
}));
