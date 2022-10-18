import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledContainer = styled(Button)(({ theme }) => ({
  fontSize: '100px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  border: `1px solid ${theme.palette.primary.main}`,
  padding: '5px 10px',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.common.white}`,
  },
}));
