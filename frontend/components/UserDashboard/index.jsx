import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import ProfileMenu from './Menu';
import { StyledGrid } from './Styles';

const UserDashboard = ({ children }) => {
  return (
    <StyledGrid container spacing={4}>
      <Grid item sm={3} md={4} lg={3}>
        <ProfileMenu />
      </Grid>
      <Grid item sm={9} md={8} lg={9}>
        <Box>{children}</Box>
      </Grid>
    </StyledGrid>
  );
};

export default UserDashboard;
