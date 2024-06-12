import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/components/Layouts';
import { HomePage } from '@/pages/HomePage/HomePage';
import { routes } from '@/routes';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={routes.PROFILE} element={<Layout />}>
        <Route index element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};
