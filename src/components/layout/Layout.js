import React from 'react';
import Container from '../container/Container';
import AppBar from '../header/AppBar';

const Layout = ({children}) => (
    <>
    <AppBar />
    <Container> {children} </Container>
    </>
);

export default Layout;