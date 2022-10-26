import styled from '@emotion/styled';
import { Box } from '@mui/system';
import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const ChildrenContainer = styled(Box)(({ theme }) => ({
    margin: '150px 5% 30px 5%',
    [theme.breakpoints.down('sm')]: {
        margin: '150px 3%',
    },
}));

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <ChildrenContainer>{children}</ChildrenContainer>
            <Footer />
        </div>
    );
};

export default Layout;
