import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import cartReducer from './cartSlice';
import itemsReducer from './itemsSlice';

export const store = configureStore({
  reducer: { filterReducer, cartReducer, itemsReducer },
});
