import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
