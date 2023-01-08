import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'Mobile Phones',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (store, action) => {
      store.category = action.payload;
    },
  },
});

export const { changeCategory } = filterSlice.actions;

export default filterSlice.reducer;
