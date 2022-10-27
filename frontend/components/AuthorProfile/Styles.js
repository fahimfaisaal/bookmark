import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: '56px 56px',
  border: '0px solid #e5e7eb',
  backgroundColor: '#F3F4F6',
  minHeight: '200px',
  textAlign: 'center',
}));

export const HeaderStyle = styled(Typography)(() => ({
  fontSize: '42px',
  fontWeight: '700',
  textTransform: 'uppercase',
}));
