import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layouts';
import { HomePage, RandomAuctionPage, AuctionPageCustom, AuctionPagePerformer, AddAuctionPage } from '@/pages';
import { routes } from '@/routes';




export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={routes.PROFILE} element={<Layout />}>
        <Route index element={<ProfilePage />} />
      </Route>
      <Route path={routes.SETTINGS} element={<Layout />}>
        <Route index element={<Settings />} />
      <Route path={routes.AUCTION} element={<Layout />}>
        <Route index element={<AuctionPageCustom />} />
      </Route>
      <Route path={routes.RANDOMAUCTION} element={<Layout />}>
        <Route index element={<RandomAuctionPage />} />
      </Route>
      <Route path={routes.AUCTIONPERFORMER} element={<Layout />}>
        <Route index element={<AuctionPagePerformer />} />
      </Route>
      <Route path={routes.ADDAUCTION} element={<Layout />}>
        <Route index element={<AddAuctionPage />} />
      </Route>
    </Routes>
  );
};
