import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const keyApi = '934b8717141134b934d6654aab675306';
const urlConst = 'https://api.themoviedb.org/3/';

type objSearch = {
  search: string;
  page: number;
};
export const getSearchArrayActors = createAsyncThunk(
  'tmdb/getSearchArrayActors',
  async (obj: objSearch, { rejectWithValue }) => {
    const { search, page } = obj;
    try {
      let response = await fetch(
        `${urlConst}search/person?api_key=${keyApi}&language=en-US&query=${search}&page=${
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
type objActorId = {
  id: number;
};
export const getContentActor = createAsyncThunk(
  'tmdb/getContentActor',
  async (obj: objActorId, { rejectWithValue }) => {
    const { id } = obj;
    try {
      let response = await fetch(`${urlConst}person/${id}?api_key=${keyApi}&language=en-US`);
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

type objPopular = {
  page: number;
};

export const getPopularActors = createAsyncThunk(
  'tmdb/getPopularActors',
  async function (obj: objPopular, { rejectWithValue }) {
    let { page } = obj;

    try {
      let response = await fetch(`${urlConst}person/popular?api_key=${keyApi}&page=${page === undefined ? 1 : page}`);

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

const TMDBActorsSlice = createSlice({
  name: 'tmdbActors',
  initialState: {
    tmdbActors: [],
    tmdbSearchActors: [],
    personData: [],
    tmdbContentActor: {},
    status: null,
    error: null,
    totalElements: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularActors.pending, (state) => {})
      .addCase(getPopularActors.fulfilled, (state: any, action) => {
        state.tmdbSearchActors = [];
        state.tmdbActors = [...state.tmdbActors, ...action.payload.results];
      })
      .addCase(getPopularActors.rejected, (state, action) => {})
      .addCase(getSearchArrayActors.pending, (state) => {
        state.error = null;
      })
      .addCase(getSearchArrayActors.fulfilled, (state: any, action) => {
        state.tmdbActors = [];
        state.tmdbSearchActors = [...state.tmdbSearchActors, ...action.payload.results];
      })
      .addCase(getSearchArrayActors.rejected, (state, action) => {})
      .addCase(getContentActor.pending, (state) => {
        state.error = null;
      })
      .addCase(getContentActor.fulfilled, (state: any, action) => {
        localStorage.setItem('contentActor', JSON.stringify(action.payload));
        state.tmdbContentActor = Object.keys(action.payload).length
          ? action.payload
          : JSON.parse(localStorage.getItem('contentActor') || '');
      })
      .addCase(getContentActor.rejected, (state, action) => {});
  },
});

export default TMDBActorsSlice.reducer;
