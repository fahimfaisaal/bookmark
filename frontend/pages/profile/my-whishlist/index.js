import { Box } from '@mui/system';
import UserDashboard from '../../../components/UserDashboard';
import MyWishlist from '../../../components/UserDashboard/MyWishlist';

const MyFavList = () => {
  return (
    <UserDashboard>
      <Box sx={{ boxShadow: 1, padding: 2 }}>
        <MyWishlist />
        <MyWishlist />
        <MyWishlist />
      </Box>
    </UserDashboard>
  );
};

export default MyFavList;
