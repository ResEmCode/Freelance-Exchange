import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layouts';
import { routes } from '@/routes';
import { HomePage, ProfilePage, Settings } from './pages';

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
      </Route>
    </Routes>
  );
};
