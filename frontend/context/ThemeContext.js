import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useState } from 'react';
import { paletteDark, paletteLight } from '../src/theme/palette';
import typography from '../src/theme/typography';

const Context = createContext();

export const ThemeContext = ({ children }) => {
  const [mode, setMode] = useState('light');

  const handleChangeMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? { ...paletteLight } : { ...paletteDark })
    },
    typography: {
      ...typography
    },
    shadows: [
      'none',
      'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
      'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      ...Array(22).fill('none')
    ]
  });

  return (
    <Context.Provider value={{ mode, handleChangeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
export const UseThemeContext = () => useContext(Context);
