import UserDashboard from '../../../components/UserDashboard';
import MyWishlist from '../../../components/UserDashboard/MyWishlist';

const MyFavList = () => {
  return (
    <UserDashboard>
      <MyWishlist />
      <MyWishlist />
      <MyWishlist />
    </UserDashboard>
  );
};

export default MyFavList;
