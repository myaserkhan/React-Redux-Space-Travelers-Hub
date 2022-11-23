import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Base URL
const url = 'https://api.spacexdata.com/v3/missions';

// Async Action Creators
const getMissionsApi = createAsyncThunk(
  'missions/getMissionsApi',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

// Slice Reducer
export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {
    [getMissionsApi.fulfilled]: (state, action) => {
      const missions = action.payload.map((el) => ({
        missionsId: el.missions_id,
        missionsName: el.missions_name,
        missionsDess: el.description,
      }));
      return missions;
    },
  },
});

export default missionsSlice.reducer;
