import { Layout } from '@/components/Layouts';
import { HomePage } from '@/pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@/routes';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
