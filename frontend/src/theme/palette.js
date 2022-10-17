import { grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const PRIMARY = {
  main: '#009F7F',
  light: '#04C48C ',
  dark: '#019376',
  contrastText: '#fff',
};

const SECONDARY = {
  main: '#1F2937',
  light: '#F3F4F6',
  dark: '#000000',
  contrastText: '#fff',
};

export const paletteDark = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: {
    main: '#1E293B',
  },
  divider: grey[500],
  blue: '#171F69',
  grey: GREY,
  background: {
    default: '#0F172A',
    paper: '#0F172A',
  },
  text: {
    primary: '#fff',
    secondary: grey[500],
  },
  action: {
    hover: PRIMARY.dark,
    focus: GREY[500_24],
    disabled: GREY[500_80],
  },
};

export const paletteLight = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  blue: '#171F69',
  grey: GREY,
  divider: GREY[500_24],
  text: {
    primary: '#6B7280',
    secondary: '#9CA3AF',
    disabled: GREY[500],
  },
  background: { paper: '#F9FAFB', default: '#F3F4F6', dark: '#F3F4F6' },
  action: {
    hover: PRIMARY.dark,
    focus: GREY[500_24],
    disabled: GREY[500_80],
  },
};
