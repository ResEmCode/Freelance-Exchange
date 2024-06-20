import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Navbar } from './components';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
