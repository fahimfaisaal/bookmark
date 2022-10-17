import { createTheme } from '@mui/material/styles';
import ComponentsOverrides from './overrides';
import typography from './typography';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    ...typography,
  },
  shadows: Array(25).fill('none'),
});

theme.components = ComponentsOverrides(theme);

export default theme;
