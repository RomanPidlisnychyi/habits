import { configureStore } from '@reduxjs/toolkit';
import { trackerReducer } from './tracker';

const store = configureStore({
  reducer: trackerReducer,
});

export default store;
