import { Box } from '@mui/system';
import UserDashboard from '../../../components/UserDashboard';
import MyWishlist from '../../../components/UserDashboard/MyWishlist';
import withAuth from '../../../hoc/PrivateAuth';

function MyFavList() {
  return (
    <UserDashboard>
      <Box sx={{ boxShadow: 1, padding: 2 }}>
        <MyWishlist />
        <MyWishlist />
        <MyWishlist />
      </Box>
    </UserDashboard>
  );
}

export default withAuth(MyFavList);
