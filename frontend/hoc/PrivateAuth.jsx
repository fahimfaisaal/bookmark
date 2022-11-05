import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

const withAuth = (Component) => {
  function Auth(props) {
    const isLoggedIn = useAuth();
    console.log({ isLoggedIn });
    const router = useRouter();
    useEffect(() => {
      if (!isLoggedIn) {
        router.push('/');
      }
    }, [router, isLoggedIn]);

    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      'Loading from private auth...'
    );
  }

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
