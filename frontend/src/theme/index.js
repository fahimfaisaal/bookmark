import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    ...palette,
  },
  typography: {
    ...typography,
  },
  shadows: Array(25).fill('none'),
});

export default theme;
