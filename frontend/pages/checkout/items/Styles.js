import styled from '@emotion/styled';
import { Typography } from '@mui/material';

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
