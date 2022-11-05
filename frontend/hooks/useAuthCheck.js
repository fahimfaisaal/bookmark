import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BOOKMARK_AUTH } from '../constant';
import { userLoggedIn } from '../store/features/auth/authSlice';

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const [localAuth, setLocalAuth] = useState();

  useEffect(() => {
    // const localAuth = localStorage?.getItem(BOOKMARK_AUTH);
    setLocalAuth(localStorage?.getItem(BOOKMARK_AUTH));

    if (localAuth) {
      console.log('login');

      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user
          })
        );
        setAuthChecked(true);
      }
    } else {
      setAuthChecked(false);
      console.log('logout');
    }
    console.log('outside');
  }, [dispatch, setAuthChecked, authChecked, localAuth]);

  return authChecked;
}
