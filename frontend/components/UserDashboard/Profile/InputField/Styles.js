import styled from '@emotion/styled';
import { Box, Input, InputLabel, Button } from '@mui/material';

export const StyledInput = styled(Input)(() => ({
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
  borderRadius: '7px',
  width: '250px',
  height: '220px'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.dark}`,
  color: `${theme.palette.common.white}`,
  width: '190px',
  fontSize: '12px',
  display: 'flex',
  gap: '3px',
  borderRadius: '20px',
  border: `2px solid ${theme.palette.background.dark}`,
  padding: '5px 2px'
}));

export const StyledCloseBtn = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.dark}`,
  color: `${theme.palette.common.white}`,
  width: '190px',
  fontSize: '12px',
  display: 'flex',
  gap: '3px',
  borderRadius: '20px',
  border: `2px solid ${theme.palette.background.dark}`,
  padding: '5px 2px'
}));
