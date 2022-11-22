import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from './rockets/RocketsSlice';
import missionsReducer from './missions/MissionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
