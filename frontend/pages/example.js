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
import UserDashboard from '../components/UserDashboard';
import Profile from '../components/UserDashboard/Profile';
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
          theme.palette.mode === 'light' ? '#F3F4F6' : 'common.black',
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
      <UserDashboard />

      <br />
      <br />
      <Button variant="btnGreen">Become a Seller</Button>
      <br />
      <br />
      <Button variant="btnGreen">Login</Button>
      <br />
      <br />
      <Button variant="btnAskSeller">Ask seller a question</Button>
      <br />
      <br />
      <Button variant="btnGreenLight">Downloadable</Button>
      <br />
      <br />
      <Button variant="btnGreenCart">Add to cart</Button>
      <br />
      <br />
      <Button variant="btnCart">Add to Cart</Button>
      <br />
      <br />
      <Button variant="btnCat">English</Button>
      <br />
      <br />
      {/* ==========Done by Rezuan========= */}
      <PublicationCard />
      <br />
      <br />
      <CategoryCard />
      <br />
      <br />
      <LocationIcon />
      <br />
      <br />
      <SocialMediaIcons />
      <br />
      <br />
      <CartItem />
      <br />
      <br />
      <AddressCard />
      <AuthorProfile />
      <AuthorCard />
      <BookCard />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
