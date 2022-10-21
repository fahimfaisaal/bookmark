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
import { UseThemeContext } from '../context/ThemeContext';
import ComponentsOverrides from '../src/theme/overrides';

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

      <Switch
        color="primary"
        checked={mode === 'dark'}
        onChange={() => handleChangeMode()}
      />
      {/* ==========Done by Rezuan========= */}
      <Button variant="btnGreen" sx={{ margin: 5 }}>
        Become a Seller
      </Button>
      <Button variant="btnGreen" sx={{ m: 2 }}>
        Login
      </Button>
      <Button variant="btnAskSeller" sx={{ m: 2 }}>
        Ask seller a question
      </Button>
      <div>
        <Button variant="btnGreenCart">Add to cart</Button>
      </div>
      <Button
        variant="btnCart"
        sx={{
          m: 2,
        }}
      >
        Add to Cart
      </Button>
      <Button variant="btnCat">English</Button>
      {/* ==========Done by Rezuan========= */}
      <PublicationCard />
      <CategoryCard />
      <LocationIcon />
      <SocialMediaIcons />
      <CartItem />
      <AddressCard />
      <AuthorProfile />
      <AuthorCard />
      <BookCard />
    </Container>
  );
}
