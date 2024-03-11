import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <>
      <header data-testid="header-component"><Header /></header>
      <Outlet />
    </>
  );
}

export default Layout;
