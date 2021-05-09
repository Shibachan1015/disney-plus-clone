import { configureStore } from '@reduxjs/toolkit';
import moReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
});
