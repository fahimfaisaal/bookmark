import {
  Button,
  Container,
  CssBaseline,
  Switch,
  useTheme,
} from '@mui/material';
import AddressCard from '../components/AddressCard';
import AuthorCard from '../components/AuthorCard';
import AuthorProfile from '../components/AuthorProfile';
import BookCard from '../components/BookCard';
import CartItem from '../components/CartItem';
import CategoryCard from '../components/CategoryCard';
import LocationIcon from '../components/Icons/Location';
import SocialMediaIcons from '../components/Icons/SocialMedia';
import PublicationCard from '../components/PublicationCard';
import ReviewCard from '../components/ReviewCard';
import { UseThemeContext } from '../context/ThemeContext';
import ComponentsOverrides from '../src/theme/overrides';
import ResponsiveAppBar from './testMUI';

export default function Home() {
  const { mode, handleChangeMode } = UseThemeContext();
  const theme = useTheme();

  theme.components = ComponentsOverrides(theme);

  return (
    <Container
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? 'common.white' : 'common.black',
        margin: '50px auto',
      }}
    >
      <CssBaseline />
      <ResponsiveAppBar />

      <Switch
        color="primary"
        checked={mode === 'dark'}
        onChange={() => handleChangeMode()}
      />
      {/* ==========Done by Rezuan========= */}
      <Button variant="btnGreen" sx={{ margin: 5 }}>
        Become a Seller
      </Button>
      <Button variant="btnGreen" sx={{ width: '30%', m: 2 }}>
        Login
      </Button>
      <Button
        variant="btnGreen"
        sx={{ m: 2, borderRadius: '20px', fontSize: '.7rem' }}
      >
        Ask seller a question
      </Button>
      <Button
        variant="btnGreen"
        sx={{
          m: 2,
          fontSize: '.7rem',
        }}
      >
        Downloadable
      </Button>
      <Button variant="btnCat">English</Button>
      <Button variant="btnCart" sx={{ m: 1, padding: '14px ' }}>
        Add to Cart
      </Button>
      <AuthorProfile />
      <LocationIcon />
      <SocialMediaIcons />
      <BookCard />
      <AddressCard />
      <ReviewCard />
      {/* ==========Done by Rezuan========= */}
      <CategoryCard />
      <CartItem />
      <AuthorCard />
      <PublicationCard />
    </Container>
  );
}
