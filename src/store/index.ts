import { configureStore } from '@reduxjs/toolkit';

import TMDBActorsSlice from './TMDBActorsSlice';
import TMDBSlice from './TMDBSlice';

const store = configureStore({
  reducer: {
    tmdb: TMDBSlice,
    tmdbActors: TMDBActorsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
