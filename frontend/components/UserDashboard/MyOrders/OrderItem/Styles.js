import styled from '@emotion/styled';
import {
  Button,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
  boxSizing: 'border-box',
  cursor: 'pointer',
  border: `2px solid ${theme.palette.background.default}`,
  borderRadius: '5px',
  '&:hover': {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  fontWeight: 600,
}));

// export const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   borderTop: `1px solid ${theme.palette.text.secondary}`,
//   backgroundColor: theme.palette.paper,
// }));
export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '5px',
  backgroundColor: '#DBEAFE',
  color: '#7E8CF6',
  fontWeight: 500,
  '&:hover': {
    borderRadius: '5px',
    backgroundColor: '#DBEAFE',
    color: '#7E8CF6',
    fontWeight: 500,
  },
}));
