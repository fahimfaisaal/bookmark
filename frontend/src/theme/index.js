import { createTheme } from '@mui/material/styles';
import ComponentsOverrides from './overrides';
import paletteLight from './palette';
import typography from './typography';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    ...paletteLight,
  },
  typography: {
    ...typography,
  },
  shadows: Array(25).fill('none'),
});

theme.components = ComponentsOverrides(theme);

export default theme;
