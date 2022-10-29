import styled from '@emotion/styled';
import { Box, Button, TextField, Typography } from '@mui/material';

export const StyledTypo = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  textAlign: 'center',
  padding: '4px 6px',
  fontWeight: 500,
  fontSize: '1.2rem',
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  marginRight: '5px',
  color: 'white',
  backgroundColor: `${theme.palette.primary.main}`,
}));

export const StyledBtn = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  width: '100px',
  padding: '15px 10px',
  fontSize: '1rem',
  fontWeight: 700,
  color: '#635BFF',
  boxShadow: `${theme.shadows[5]}`,
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  border: 'none',
  borderRadius: '8px',
  padding: '30px',
  backgroundColor: `${theme.palette.background.default}`,
  boxShadow: `${theme.shadows[1]}`,
}));
