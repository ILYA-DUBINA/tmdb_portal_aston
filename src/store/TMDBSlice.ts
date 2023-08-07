import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const keyApi = '934b8717141134b934d6654aab675306';
const urlConst = 'https://api.themoviedb.org/3/';

type objSearch = {
  search: string;
  page: number;
};

export const getSearchArrayMovies = createAsyncThunk(
  'tmdb/getSearchArrayMovies',
  async (obj: objSearch, { rejectWithValue }) => {
    const { search, page } = obj;
    try {
      let response = await fetch(
        `${urlConst}search/movie?api_key=${keyApi}&language=en-US&query=${search}&page=${
          page === undefined ? 1 : page
        }`,
      );
      if (!response.ok) {
        throw new Error('Server Error');
      }
      let data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

type objFilmId = {
  id: number;
};

export const getContentFilm = createAsyncThunk('tmdb/getContentFilm', async (obj: objFilmId, { rejectWithValue }) => {
  const { id } = obj;
  try {
    let response = await fetch(`${urlConst}movie/${id}?api_key=${keyApi}&language=en-US`);
    if (!response.ok) {
      throw new Error('Server Error');
    }
    let data = await response.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

type objPopular = {
  text: string;
  page: number;
};

export const getPopularMovies = createAsyncThunk(
  'tmdb/getPopularMovies',
  async function (obj: objPopular, { rejectWithValue }) {
    let { text, page } = obj;
    try {
      let response;

      if (!text) {
        response = await fetch(`${urlConst}movie/popular?api_key=${keyApi}&page=${page === undefined ? 1 : page}`);
      } else if (text === 'top_rated') {
        response = await fetch(`${urlConst}movie/top_rated?api_key=${keyApi}&page=${page === undefined ? 1 : page}`);
      } else if (text === 'now_playing') {
        response = await fetch(`${urlConst}movie/now_playing?api_key=${keyApi}&page=${page === undefined ? 1 : page}`);
      }

      if (!response?.ok) {
        throw new Error('Server Error');
      }
      let data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

interface State {
  tmdb: object[];
  tmdbContentFilm: {};
  status: string;
  error: {};
  totalElements: number;
}

const TMDBSlice = createSlice({
  name: 'tmdb',
  initialState: {
    tmdb: [],
    tmdbContentFilm: {},
    status: '',
    error: null as unknown as {},
    totalElements: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.status = 'loading';
        state.error = {};
      })
      .addCase(getPopularMovies.fulfilled, (state: State, action) => {
        state.status = 'fulfilled';
        localStorage.setItem('array', JSON.stringify(action.payload.results));
        state.totalElements = action.payload.total_results;
        state.tmdb = action.payload.results ? action.payload.results : JSON.parse(localStorage.getItem('array') || '');
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(getSearchArrayMovies.pending, (state) => {
        state.status = 'loading';
        state.error = {};
      })
      .addCase(getSearchArrayMovies.fulfilled, (state: State, action) => {
        localStorage.setItem('arraySearch', JSON.stringify(action.payload.results));
        state.totalElements = action.payload.total_results;
        state.tmdb = action.payload.results
          ? action.payload.results
          : JSON.parse(localStorage.getItem('arraySearch') || '');
      })
      .addCase(getSearchArrayMovies.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(getContentFilm.pending, (state) => {
        state.status = 'loading';
        state.error = {};
      })
      .addCase(getContentFilm.fulfilled, (state: State, action) => {
        localStorage.setItem('contentFilm', JSON.stringify(action.payload));
        state.tmdbContentFilm = Object.keys(action.payload).length
          ? action.payload
          : JSON.parse(localStorage.getItem('contentFilm') || '');
      })
      .addCase(getContentFilm.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      });
  },
});

export default TMDBSlice.reducer;
