import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layouts';
import {
  HomePage,
  RandomAuctionPage,
  AuctionPageCustom,
  AuctionPagePerformer,
  AddAuctionPage,
  ProfilePage,
  Settings,
  ExchangePage,
  ChatPage,
  OrdersPage
} from '@/pages';
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
        <Route index path=':category' element={<Settings />} />
      </Route>
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
      <Route path={routes.EXCHANGE} element={<Layout />}>
        <Route index element={<ExchangePage />} />
      </Route>
      <Route path={routes.CHATPAGE} element={<Layout />}>
        <Route index element={<ChatPage />} />
      </Route>
      <Route path={routes.ORDERS} element={<Layout />}>
        <Route index element={<OrdersPage />} />
      </Route>
    </Routes>
  );
};
