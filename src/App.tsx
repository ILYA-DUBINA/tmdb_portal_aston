import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import style from './App.module.css';
import { AppHeader } from './components/App/AppHeader';
import { MainPage } from './page/MainPage';

const PopularActorsPage = lazy(() => import('./page/PopularActorsPage'));
const ContentFilmPage = lazy(() => import('./page/ContentFilmPage'));
const ContentActorPage = lazy(() => import('./page/ContentActorPage'));

const App = () => {
  return (
    <div className={style.App}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route
          path='/contentFilm'
          element={
            <Suspense fallback={'loading ....'}>
              <ContentFilmPage />
            </Suspense>
          }
        />
        <Route
          path='/popularActors'
          element={
            <Suspense fallback={'loading ....'}>
              <PopularActorsPage />
            </Suspense>
          }
        />
        <Route
          path='/contentActor'
          element={
            <Suspense fallback={'loading ....'}>
              <ContentActorPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
