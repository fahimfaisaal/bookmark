import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Switch,
  Typography,
  useTheme,
} from '@mui/material';
import ResponsiveAppBar from './testMUI';
import myShadows from '../src/theme/shadows';
import { UseThemeContext } from '../context/ThemeContext';
import ComponentsOverrides from '../src/theme/overrides';
import RecipeReviewCard from '../components/test/Card';
import CartItem from '../components/CartItem';

export default function Home() {
  const { mode, handleChangeMode } = UseThemeContext();
  const theme = useTheme();

  theme.components = ComponentsOverrides(theme);

  return (
    <Container
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? 'common.white' : 'common.black',
      }}
    >
      <CssBaseline />
      <ResponsiveAppBar />

      <Switch
        color="primary"
        checked={mode === 'dark'}
        onChange={() => handleChangeMode()}
      />

      <Button variant="btnDark">Demo</Button>

      <Button variant="btnLight"></Button>

      <Typography variant="h1">Heading - 1</Typography>
      <Typography variant="h2" sx={{}}>
        {' '}
        Popular Products{' '}
      </Typography>
      <Typography variant="h3" sx={{ color: 'text.disabled' }}>
        {' '}
        Heading - 3{' '}
      </Typography>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {' '}
        My First Caption{' '}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.primary' }}>
        The BNP alleged that a transportation strike, which was not declared
        earlier, was enforced in Mymensingh division ahead of the rally in order
        to to prevent BNP men joining the rally. Sensing that such obstructions
        might come, BNP leaders and activists took up various strategies,
        including being at the venue well before the rally began at 2:00pm,
        party insiders said. Many of them stayed in Mymensingh overnight to
        dodge the ruling party men and the law enforcement agencies, they added.
        In the absence of transport, party men reached the venue on boats and
        trains. On Friday night, many BNP activists were seen sitting or sleep
        at the venue, while others made their sleeping arrangements on a
        footpath nearby.
      </Typography>
      <Divider sx={{ m: 4 }} />
      <Button variant="btnDark" sx={{ m: 2 }}>
        Become a Seller{' '}
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'primary.light', m: 2 }}
      >
        Primary Light
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'primary.dark', m: 2 }}
      >
        Join
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'secondary.main', m: 2 }}
      >
        Secondary Main
      </Button>
      <Button variant="btnLight">English</Button>
      <Button variant="contained" sx={{ backgroundColor: 'secondary.dark' }}>
        Secondary Dark
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}
      >
        Category{' '}
      </Button>
      <Box
        sx={{
          boxShadow: '1',
          backgroundColor: 'background.paper',
          width: '8rem',
          height: '5rem',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        boxShadow: 1
      </Box>
      <Box
        sx={{
          backgroundColor: 'common.white',
          boxShadow: myShadows.box,
          width: '8rem',
          height: '5rem',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        boxShadow: 2
      </Box>
      <RecipeReviewCard />

      <CartItem />
    </Container>
  );
}
