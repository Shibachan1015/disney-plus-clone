import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
});
