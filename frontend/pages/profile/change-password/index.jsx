import UserDashboard from '../../../components/UserDashboard';
import ChangePassword from '../../../components/UserDashboard/ChangePassword';
import withAuth from '../../../hoc/PrivateAuth';

function ChangePass() {
  return (
    <UserDashboard>
      <ChangePassword />
    </UserDashboard>
  );
}

export default withAuth(ChangePass);
