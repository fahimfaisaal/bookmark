import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import React from 'react';
import ComponentsOverrides from '../../src/theme/overrides';
import Footer from './Footer';
import NavBar from './NavBar';

const ChildrenContainer = styled(Box)(({ theme }) => ({
  margin: '130px 5%',
  [theme.breakpoints.down('sm')]: {
    margin: '130px 3%',
  },
}));

const Layout = ({ children }) => {
  const theme = useTheme();
  theme.components = ComponentsOverrides(theme);
  return (
    <div>
      <NavBar />
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </div>
  );
};

export default Layout;
