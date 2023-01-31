import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  category: string;
  currentPage: number;
}
const initialState: IInitialState = {
  category: 'All',
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (store, action) => {
      store.category = action.payload;
    },

    setCurrentPage: (store, action) => {
      store.currentPage = action.payload;
    },
  },
});

export const { changeCategory, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
