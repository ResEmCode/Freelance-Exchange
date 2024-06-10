import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layouts';
import { HomePage, RandomAuctionPage } from '@/pages';
import { routes } from '@/routes';
import { AuctionPageCustom } from './pages/AuctionPageCustom/AuctionPageCustom';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path={routes.AUCTION} element={<Layout />}>
        <Route index element={<AuctionPageCustom />} />
      </Route>
      <Route path={routes.RANDOMAUCTION} element={<Layout />}>
        <Route index element={<RandomAuctionPage />} />
      </Route>
    </Routes>
  );
};
