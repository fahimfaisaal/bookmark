import Head from 'next/head';
import UserDashboard from '../../components/UserDashboard';
import Profile from '../../components/UserDashboard/Profile';

function ProfilePage() {
  return (
    <UserDashboard>
      <Head>
        <title>Profile</title>
        <meta
          name="description"
          content="Bookmark application cart items profile page"
        />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/2/2f/Icon-green-line-b-default.svg"
        />
      </Head>
      <Profile />
    </UserDashboard>
  );
}

export default ProfilePage;
