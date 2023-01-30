import { createSlice } from '@reduxjs/toolkit';
interface IInitialState {
  category: string;
}
const initialState: IInitialState = {
  category: '',
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
