import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice';
import userRe

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
});
