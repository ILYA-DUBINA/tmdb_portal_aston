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
    console.log(obj);
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
      // console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
type objPopular = {
  page: number;
};
// type objId = {
//   id: number;
// };
export const getPopularActors = createAsyncThunk(
  'tmdb/getPopularActors',
  async function (obj: objPopular, { rejectWithValue }) {
    let { page } = obj;

    try {
      console.log(page);
      let response = await fetch(`${urlConst}person/popular?api_key=${keyApi}&page=${page === undefined ? 1 : page}`);

      if (!response?.ok) {
        throw new Error('Server Error');
      }
      let data = await response.json();
      console.log(data);
      // getPersonId({ id: data.results.id });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
// const getPersonId = createAsyncThunk('tmdb/getPersonId', async function (obj: objId, { rejectWithValue }) {
//   let { id } = obj;
//   console.log(obj);
//   try {
//     let response = await fetch(`${urlConst}person?api_key=${keyApi}&${id}`);
//     if (!response?.ok) {
//       throw new Error('Server Error');
//     }
//     let data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error: any) {
//     return rejectWithValue(error.message);
//   }
// });

const TMDBActorsSlice = createSlice({
  name: 'tmdbActors',
  initialState: {
    tmdbActors: [],
    tmdbSearchActors: [],
    personData: [],
    status: null,
    error: null,
    totalElements: 0,
  },
  reducers: {
    // getAllMovies(action) {
    //   fetchTMDBFunc(`search/movie?query=${action.payload.search}&page=${action.payload.page}&api_key=${keyApi}`);
    // },
    // getPopularMovies() {
    //   fetchTMDBFunc(`movie/popular?api_key=${keyApi}`);
    // },
    add(state, action) {},
    remove(state, action) {},
    toggle(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularActors.pending, (state) => {
        // state?.status = 'pending';
        // state?.error = null;
      })
      .addCase(getPopularActors.fulfilled, (state: any, action) => {
        // state.status = 'idle';
        // console.log('ok');
        // localStorage.setItem('arrayActors', JSON.stringify(action.payload.results));
        // state.personId = action.payload.id;
        state.tmdbSearchActors = [];
        state.tmdbActors = [...state.tmdbActors, ...action.payload.results];
        // ? saction.payload.results
        // : JSON.parse(localStorage.getItem('arrayActors') || '');
      })
      .addCase(getPopularActors.rejected, (state, action) => {
        // state.loading = 'idle';
        // state.error = action.error;
      })
      .addCase(getSearchArrayActors.pending, (state) => {
        // state.status = 'pending';
        state.error = null;
      })
      .addCase(getSearchArrayActors.fulfilled, (state: any, action) => {
        // state.status = 'idle';
        // localStorage.setItem('arrayActorsSearch', JSON.stringify(action.payload.results));
        state.tmdbActors = [];
        state.tmdbSearchActors = [...state.tmdbSearchActors, ...action.payload.results];
        // state.tmdbActors = action.payload.results;
        // ? action.payload.results
        // : JSON.parse(localStorage.getItem('arrayActorsSearch') || '');
      })
      .addCase(getSearchArrayActors.rejected, (state, action) => {
        // state.loading = 'idle';
        // state.error = action.error;
      });
    // .addCase(getPersonId.pending, (state) => {
    //   // state.status = 'pending';
    //   state.error = null;
    // })
    // .addCase(getPersonId.fulfilled, (state, action) => {
    //   // state.status = 'idle';

    //   localStorage.setItem('arrayParsonData', JSON.stringify(action.payload.results));
    //   state.personData = action.payload.results
    //     ? action.payload.results
    //     : JSON.parse(localStorage.getItem('arrayParsonData') || '');
    // })
    // .addCase(getPersonId.rejected, (state, action) => {
    //   // state.loading = 'idle';
    //   // state.error = action.error;
    // });
  },
});

export const { add, remove, toggle } = TMDBActorsSlice.actions;

export default TMDBActorsSlice.reducer;
