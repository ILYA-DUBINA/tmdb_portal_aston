import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const keyApi = '934b8717141134b934d6654aab675306';
const urlConst = 'https://api.themoviedb.org/3/';

// const fetchTMDBFunc = createAsyncThunk('tmdb/fetchTMDBFunc', async function (url, { rejectWithValue }) {
//   console.log(url);
//   try {
//     let response = await fetch(`${urlConst}${url}`);
//     // await fetch('https://jsonplaceholder.typicode.com/posts');

//     if (!response.ok) {
//       throw new Error('Server Error');
//     }
//     let data = await response.json();
//     console.log(data, url);
//     return data.results;
//   } catch (error) {
//     console.log(error.message, url);
//     return rejectWithValue(error.message);
//   }
// });
type objSearch = {
  search: string;
  page: number;
};

export const getSearchArrayMovies = createAsyncThunk(
  'tmdb/getSearchArrayMovies',
  async (obj: objSearch, { rejectWithValue }) => {
    // const { search, page } = obj;
    console.log(obj, rejectWithValue);
    try {
      let response = await fetch(
        `${urlConst}search/movie?api_key=${keyApi}&language=en-US&query=${obj.search}&page=${obj.page}`,
      );
      if (!response.ok) {
        throw new Error('Server Error');
      }
      let data = await response.json();
      console.log(data);
      return data.results;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
type objPopular = {
  text: string;
};
export const getPopularMovies = createAsyncThunk(
  'tmdb/getPopularMovies',
  async function (obj: objPopular, { rejectWithValue }) {
    let { text } = obj;
    try {
      let response;

      if (!text) {
        response = await fetch(`${urlConst}movie/popular?api_key=${keyApi}`);
      } else if (text === 'top_rated') {
        response = await fetch(`${urlConst}movie/top_rated?api_key=${keyApi}`);
      } else if (text === 'now_playing') {
        response = await fetch(`${urlConst}movie/now_playing?api_key=${keyApi}`);
      }

      if (!response?.ok) {
        throw new Error('Server Error');
      }
      let data = await response.json();
      return data.results;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
//  async getAllMovies(search, _page = 1) {
//     const res = await this.getResource(
//       `search/movie?api_key=${this.keyApi}&language=en-US&query=${search}&page=${_page}`
//     );
//     return res.results;
//   }
// export function getAllMovies(search = '', page = 1) {
//   fetchTMDBFunc(`search/movie?api_key=${keyApi}&language=en-US&query=${search}&page=${page}`);
// }

const TMDBSlice = createSlice({
  name: 'tmdb',
  initialState: {
    tmdb: [
      // {
      //   adult: false,
      //   backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      //   genre_ids: (3)[(28, 12, 878)],
      //   id: 298618,
      //   original_language: 'en',
      //   original_title: 'The Flash',
      //   overview:
      //     "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      //   popularity: 4733.519,
      //   poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      //   release_date: '2023-06-13',
      //   title: 'The Flash',
      //   video: false,
      //   vote_average: 6.9,
      //   vote_count: 1713,
      // },
      // {
      //   adult: false,
      //   backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      //   genre_ids: (3)[(28, 12, 878)],
      //   id: 298618,
      //   original_language: 'en',
      //   original_title: 'The Flash',
      //   overview:
      //     "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      //   popularity: 4733.519,
      //   poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      //   release_date: '2023-06-13',
      //   title: 'The Flash',
      //   video: false,
      //   vote_average: 6.9,
      //   vote_count: 1713,
      // },
      // {
      //   adult: false,
      //   backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      //   genre_ids: (3)[(28, 12, 878)],
      //   id: 298618,
      //   original_language: 'en',
      //   original_title: 'The Flash',
      //   overview:
      //     "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      //   popularity: 4733.519,
      //   poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      //   release_date: '2023-06-13',
      //   title: 'The Flash',
      //   video: false,
      //   vote_average: 6.9,
      //   vote_count: 1713,
      // },
    ],
    status: null,
    error: null,
  },
  reducers: {
    // getAllMovies(action) {
    //   fetchTMDBFunc(`search/movie?query=${action.payload.search}&page=${action.payload.page}&api_key=${keyApi}`);
    // },
    // getPopularMovies() {
    //   fetchTMDBFunc(`movie/popular?api_key=${keyApi}`);
    // },
    add(state, action) {
      // state.tmdb.push({
      //   id: new Date().toISOString(),
      //   text: action.payload.text,
      //   completed: false,
      // });
    },
    remove(state, action) {},
    toggle(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        // state?.status = 'pending';
        // state?.error = null;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        // state.status = 'idle';

        localStorage.setItem('array', JSON.stringify(action.payload));

        state.tmdb = action.payload ? action.payload : JSON.parse(localStorage.getItem('array') || '');
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        // state.loading = 'idle';
        // state.error = action.error;
      })
      .addCase(getSearchArrayMovies.pending, (state) => {
        // state.status = 'pending';
        state.error = null;
      })
      .addCase(getSearchArrayMovies.fulfilled, (state, action) => {
        // state.status = 'idle';

        localStorage.setItem('arraySearch', JSON.stringify(action.payload));

        state.tmdb = action.payload ? action.payload : JSON.parse(localStorage.getItem('arraySearch') || '');
      })
      .addCase(getSearchArrayMovies.rejected, (state, action) => {
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
