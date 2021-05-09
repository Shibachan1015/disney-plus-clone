import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieRe

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
