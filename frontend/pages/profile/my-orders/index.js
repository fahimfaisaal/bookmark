import UserDashboard from '../../../components/UserDashboard';
import MyOrders from '../../../components/UserDashboard/MyOrders';
import withAuth from '../../../hoc/PrivateAuth';

const OrderList = () => {
  return (
    <UserDashboard>
      <MyOrders />
    </UserDashboard>
  );
};

export default withAuth(OrderList);
