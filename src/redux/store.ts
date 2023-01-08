import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
export const store = configureStore({
  reducer: { filterReducer },
});
