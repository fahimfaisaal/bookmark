import { Container, CssBaseline, Switch, useTheme } from '@mui/material';
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
