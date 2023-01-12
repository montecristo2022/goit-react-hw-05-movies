import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const Actor = lazy(() => import('./Actor'));
const Rewiev = lazy(() => import('./Rewiev'));
const OneFilmPage = lazy(() => import('./OneFilmPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<OneFilmPage />}>
            <Route path="actor" element={<Actor />} />
            <Route path="rewiev" element={<Rewiev />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
