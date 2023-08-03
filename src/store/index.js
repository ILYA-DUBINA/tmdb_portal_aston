import { configureStore } from '@reduxjs/toolkit';

import TMDBActorsSlice from './TMDBActorsSlice';
import TMDBSlice from './TMDBSlice';

export default configureStore({
  reducer: {
    tmdb: TMDBSlice,
    tmdbActors: TMDBActorsSlice,
  },
});
