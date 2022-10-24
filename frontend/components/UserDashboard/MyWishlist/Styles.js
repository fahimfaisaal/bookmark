import styled from '@emotion/styled';
import { Button, Stack } from '@mui/material';
import { Box } from '@mui/system';

export const StyledStack = styled(Stack)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.background.dark}`,
  padding: '5px 0px 20px',
}));

export const StyledContainer = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.dark}`,
  color: `${theme.palette.common.white}`,
  width: '5px',
  fontSize: '12px',
  display: 'flex',
  gap: '3px',
  borderRadius: '6px',
  border: `1px solid ${theme.palette.primary.main}`,
  padding: '5px 2px',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.dark}`,
    color: `${theme.palette.common.white}`,
  },
}));

export const StyledImage = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  border: `2px solid ${theme.palette.background.dark}`,
  padding: '4px',
  margin: '2px',
  display: 'flex',
  alignItems: 'center',
}));

export const StyledRemove = styled(Button)(({ theme }) => ({
  color: 'red',
  borderLeft: `2px dashed ${theme.palette.background.dark}`,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const StyledCart = styled(Button)(({ theme }) => ({
  '&:hover': {
    textDecoration: 'underline',
  },
}));
