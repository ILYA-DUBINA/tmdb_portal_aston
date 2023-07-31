// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import style from './App.module.css';
import { AppHeader } from './components/App/AppHeader';
// import { ContentActorPage } from './page/ContentActorPage';
// import { ContentFilmPage } from './page/ContentFilmPage';
// import { Error404Page } from './page/Error404Page';
// import { ErrorBoundaryPage } from './page/ErrorBoundaryPage';
import { MainPage } from './page/MainPage';
import { PopularActorsPage } from './page/PopularActorsPage';
// import { getAllMovies } from './store/TMDBSlice';

const App = () => {
  return (
    <div className={style.App}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* <Route path='/contentFilm' element={<ContentFilmPage />} /> */}
        <Route path='/popularActors' element={<PopularActorsPage />} />
        {/* <Route path='/contentActor' element={<ContentActorPage />} /> */}
        {/* <Route path='/error404' element={<Error404Page />} />
        <Route path='/errorBoundary' element={<ErrorBoundaryPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
