import React from 'react';
import ChangePassword from './ChangePassword';
import MyOrders from './MyOrders';
import MyWishlist from './MyWishlist';
import Profile from './Profile';

const UserDashboard = () => {
  return (
    <div>
      <Profile />
      <ChangePassword />
      <MyOrders />
      <MyWishlist />
    </div>
  );
};

export default UserDashboard;
