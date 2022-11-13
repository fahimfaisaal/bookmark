import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import UserDashboard from '../../../components/UserDashboard';
import MyWishlist from '../../../components/UserDashboard/MyWishlist';
import { useGetBooksQuery } from '../../../store/features/books/booksApi';
import qs from 'qs';

const MyFavList = () => {
  const authUser = useSelector((state) => state?.auth?.user);
  const { data: favBooks } = useGetBooksQuery({
    query: qs.stringify(
      {
        populate: '*',
        filters: {
          users: {
            id: authUser?.id
          }
        },
        sort: 'id'
      },
      { encode: false }
    )
  });

  return (
    <UserDashboard>
      <Box sx={{ boxShadow: 1, padding: 2 }}>
        {favBooks?.data?.map((favBook) => (
          <MyWishlist
            book={favBook?.attributes}
            key={favBook?.id}
            bookId={favBook?.id}
          />
        ))}
      </Box>
    </UserDashboard>
  );
};

export default MyFavList;
