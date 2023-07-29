import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const keyApi = '934b8717141134b934d6654aab675306';
// const urlConst = 'https://api.themoviedb.org/3/';

export const fetchTMDBFunc = createAsyncThunk('tmdb/fetchTMDBFunc', async function () {
  // let responce = await fetch(`${urlConst}movie/popular?api_key=${keyApi}`);
  // await fetch('https://jsonplaceholder.typicode.com/posts');
  // let data = await responce.json();
  // console.log(data);
  // return data;
});

const TMDBSlice = createSlice({
  name: 'tmdb',
  initialState: {
    tmdb: [
      {
        adult: false,
        backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
        genre_ids: (3)[(28, 12, 878)],
        id: 298618,
        original_language: 'en',
        original_title: 'The Flash',
        overview:
          "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        popularity: 4733.519,
        poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
        release_date: '2023-06-13',
        title: 'The Flash',
        video: false,
        vote_average: 6.9,
        vote_count: 1713,
      },
      {
        adult: false,
        backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
        genre_ids: (3)[(28, 12, 878)],
        id: 298618,
        original_language: 'en',
        original_title: 'The Flash',
        overview:
          "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        popularity: 4733.519,
        poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
        release_date: '2023-06-13',
        title: 'The Flash',
        video: false,
        vote_average: 6.9,
        vote_count: 1713,
      },
      {
        adult: false,
        backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
        genre_ids: (3)[(28, 12, 878)],
        id: 298618,
        original_language: 'en',
        original_title: 'The Flash',
        overview:
          "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        popularity: 4733.519,
        poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
        release_date: '2023-06-13',
        title: 'The Flash',
        video: false,
        vote_average: 6.9,
        vote_count: 1713,
      },
    ],
    status: null,
    error: null,
  },
  reducers: {
    add(state, action) {
      state.tmdb.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    remove(state, action) {},
    toggle(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTMDBFunc.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchTMDBFunc.fulfilled, (state, action) => {
        // state.status = 'idle';
        // state.tmdb = action.payload;
      })
      .addCase(fetchTMDBFunc.rejected, (state, action) => {
        // state.loading = 'idle';
        // state.error = action.error;
      });
  },
  // extraReducers: {
  //   [fetchTMDBFunc.pending]: (state) => {
  //     state.status = 'loading';
  //     state.error = null;
  //   },
  //   [fetchTMDBFunc.fulfilled]: (state, action) => {
  //     state.status = 'resolve';
  //     state.tmdb = action.payload;
  //   },
  //   [fetchTMDBFunc.rejected]: (state, action) => {},
  // },
});

export const { add, remove, toggle } = TMDBSlice.actions;

export default TMDBSlice.reducer;
