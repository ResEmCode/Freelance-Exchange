import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

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
