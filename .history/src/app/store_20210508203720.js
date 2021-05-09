import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieRedu

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
