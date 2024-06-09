import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/components/Layouts';
import { HomePage } from '@/pages/HomePage/HomePage';
import { routes } from '@/routes';
import { RandomAuctionPage } from './pages/RandomAuctionPage/RandomAuctionPage';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={routes.RANDOMAUCTION} element={<Layout />}>
        <Route index element={<RandomAuctionPage />} />
      </Route>
    </Routes>
  );
};
