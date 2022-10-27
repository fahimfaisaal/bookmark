import { Box, Grid } from '@mui/material';
import React from 'react';
import ProfileMenu from './Menu';
import { StyledGrid } from './Styles';

const UserDashboard = ({ children }) => {
  return (
    <StyledGrid container spacing={4}>
      <Grid item md={12} lg={3}>
        <ProfileMenu />
      </Grid>
      <Grid item md={12} lg={9}>
        <Box>{children}</Box>
      </Grid>
    </StyledGrid>
  );
};

export default UserDashboard;
