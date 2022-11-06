import styled from '@emotion/styled';
import { Box } from '@mui/system';

export const StyledBox = styled(Box)(({ theme }) => ({
  borderLeft: `1px solid ${theme.palette.background.dark}`,
  padding: '15px'
}));
export const StyledOrderBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.paper}`,
  borderTop: `1px solid ${theme.palette.background.dark}`,
  borderBottom: `1px solid ${theme.palette.background.dark}`,
  marginTop: '10px'
}));
