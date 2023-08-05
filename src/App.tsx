import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import style from './App.module.css';
import { AppHeader } from './components/App/AppHeader';
import { Error404 } from './components/Error/Error404';
import ErrorBoundary from './components/Error/ErrorBoundary';
import { SpinerLoading } from './spinerLoading/spinerLoading';

const PopularActorsPage = lazy(() => import('./page/PopularActorsPage'));
const ContentFilmPage = lazy(() => import('./page/ContentFilmPage'));
const ContentActorPage = lazy(() => import('./page/ContentActorPage'));
const MainPage = lazy(() => import('./page/MainPage'));

const App = () => {
  return (
    <div className={style.App}>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<SpinerLoading />}>
              <ErrorBoundary>
                <AppHeader />
                <MainPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path='/contentFilm'
          element={
            <Suspense fallback={<SpinerLoading />}>
              <ErrorBoundary>
                <AppHeader />
                <ContentFilmPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path='/popularActors'
          element={
            <Suspense fallback={<SpinerLoading />}>
              <ErrorBoundary>
                <AppHeader />
                <PopularActorsPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path='/contentActor'
          element={
            <Suspense fallback={<SpinerLoading />}>
              <ErrorBoundary>
                <AppHeader />
                <ContentActorPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
