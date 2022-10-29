import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import ProfileMenu from './Menu';
import { StyledGrid } from './Styles';

const UserDashboard = ({ children }) => {
  return (
    <Grid container spacing={4} sx={{ paddingTop: 5, marginTop: -5 }}>
      <Grid item xs={12} sm={3} md={4} lg={3}>
        <ProfileMenu />
      </Grid>
      <Grid item xs={12} sm={8} md={8} lg={9}>
        <Box>{children}</Box>
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
