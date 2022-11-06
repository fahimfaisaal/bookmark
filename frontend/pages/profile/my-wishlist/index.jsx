import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import UserDashboard from '../../../components/UserDashboard';
import MyWishlist from '../../../components/UserDashboard/MyWishlist';
import withAuth from '../../../hoc/PrivateAuth';
import { useGetBooksQuery } from '../../../store/features/books/booksApi';

const MyFavList = () => {
  const authUser = useSelector((state) => state?.auth?.user);
  const { data: favBooks } = useGetBooksQuery({
    query: {
      populate: '*',
      filters: {
        users: {
          id: authUser?.id
        }
      },
      sort: 'id'
    }
  });
  console.log({ favBooks });
  return (
    <UserDashboard>
      <Box sx={{ boxShadow: 1, padding: 2 }}>
        {favBooks?.data?.map((favBook) => (
          <MyWishlist book={favBook} key={favBook?.id} />
        ))}
      </Box>
    </UserDashboard>
  );
};

export default withAuth(MyFavList);
