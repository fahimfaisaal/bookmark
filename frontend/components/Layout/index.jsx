import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import React from 'react';
import ComponentsOverrides from '../../src/theme/overrides';
import Footer from './Footer';
import NavBar from './NavBar';

const ChildrenContainer = styled(Box)(({ theme }) => ({
  margin: '130px 5%',
  [theme.breakpoints.down('sm')]: {
    margin: '130px 3%'
  }
}));

function Layout({ children }) {
  // Custom Theme ================================
  const theme = useTheme();
  theme.components = ComponentsOverrides(theme);
  // Custom Theme ================================

  const router = useRouter();
  const URL = router.pathname;

  return (
    <Box
      sx={
        URL.includes('/profile') || URL.includes('/checkout')
          ? { backgroundColor: `${theme.palette.background.paper}` }
          : null
      }
    >
      <NavBar />
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </Box>
  );
}

export default Layout;
