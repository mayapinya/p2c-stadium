import { Outlet } from 'react-router-dom';
import Container from '../container/Container';
import Navbar from '../header/Header';

function AuthLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default AuthLayout;
