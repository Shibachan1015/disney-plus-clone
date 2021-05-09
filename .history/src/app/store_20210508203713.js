import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movie

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
