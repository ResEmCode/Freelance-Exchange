import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

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
