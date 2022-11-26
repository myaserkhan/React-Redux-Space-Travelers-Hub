import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Base URL
const url = 'https://api.spacexdata.com/v3/rockets';

// Async Action Creators
export const fetchRectketApi = createAsyncThunk(
  'rockets/fetchRectketApi',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

// Slice Reducer
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: {
      reducer: (state, action) => state.map((el) => (el.rocketId === action.payload
        ? { ...el, rocketReserved: true } : el)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },

    cancelRocket: {
      reducer: (state, action) => state.map((el) => (el.rocketId === action.payload
        ? { ...el, rocketReserved: false } : el)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
  },

  extraReducers: {
    [fetchRectketApi.fulfilled]: (state, action) => {
      const rockets = action.payload.map((el) => ({
        rocketId: el.rocket_id,
        rocketName: el.rocket_name,
        rocketDesc: el.description,
        rocketImg: el.flickr_images[0],
        rocketReserved: true,
      }));
      return rockets;
    },
  },
});

export const { reserveRocket, cancelRocket } = rocketSlice.actions;

export default rocketSlice.reducer;
