import UserDashboard from '../../components/UserDashboard';
import Profile from '../../components/UserDashboard/Profile';
// import withAuth from '../../hoc/PrivateAuth';

function ProfilePage() {
  return (
    <UserDashboard>
      <Profile />
    </UserDashboard>
  );
}

export default ProfilePage;
