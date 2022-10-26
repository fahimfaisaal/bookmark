import { Box, Grid } from '@mui/material';
import React from 'react';
import ProfileMenu from './Menu';

const UserDashboard = ({ children }) => {
  return (
    <Grid container spacing={4}>
      <Grid item lg={3}>
        <ProfileMenu />
      </Grid>
      <Grid item lg={9}>
        <Box>{children}</Box>
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
