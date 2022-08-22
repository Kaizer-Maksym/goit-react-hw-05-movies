import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
