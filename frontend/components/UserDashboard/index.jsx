import React from 'react';
import ChangePassword from './ChangePassword';
import MyOrders from './MyOrders';
import Profile from './Profile';

const UserDashboard = () => {
  return (
    <div>
      <Profile />
      <ChangePassword />
      <MyOrders />
    </div>
  );
};

export default UserDashboard;
