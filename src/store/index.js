import { configureStore } from '@reduxjs/toolkit';

import TMDBSlice from './TMDBSlice';

export default configureStore({
  reducer: {
    tmdb: TMDBSlice,
  },
});
