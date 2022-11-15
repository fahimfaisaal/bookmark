import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { BOOKMARK_AUTH } from '../constant';
import { userLoggedOut } from '../store/features/auth/authSlice';

const useProfileMenuHandlers = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return {
    logoutUser() {
      dispatch(userLoggedOut());
      localStorage.removeItem(BOOKMARK_AUTH);
      router.push('/');
      toast.success('You are logged out!');
    }
  };
};

export default useProfileMenuHandlers;
