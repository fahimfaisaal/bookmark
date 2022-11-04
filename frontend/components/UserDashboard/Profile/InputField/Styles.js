import styled from '@emotion/styled';
import { Box, Input, InputLabel } from '@mui/material';

export const StyledInput = styled(Input)(({ theme }) => ({
  display: 'none'
}));
export const StyledLabel = styled(InputLabel)(({ theme }) => ({
  color: `${theme.palette.primary.dark}`,
  fontWeight: 600,
  display: 'inline-block',
  padding: '6px 12px',
  cursor: 'pointer',
  textAlign: 'center'
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
  border: `2px dashed ${theme.palette.background.other}`,
  borderRadius: '7px'
}));
