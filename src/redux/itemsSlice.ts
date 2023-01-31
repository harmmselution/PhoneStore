import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IAllItems {
  allItems: any[];
}
const initialState: IAllItems = {
  allItems: [],
};

export const fetchItems: any = createAsyncThunk(
  'allItems/fetchItemsStatus',
  async (params: any) => {
    const { category, searchValue, currentPage } = params;
    const { data } = await axios.get(
      `https://63b191980d51f5b2971a66f1.mockapi.io/items?page=${currentPage}&limit=8&category=${
        category === 'All' ? '' : category
      }&search=${searchValue}`,
    );
    return data;
  },
);

const filterSlice = createSlice({
  name: 'allItems',
  initialState,
  reducers: {
    setAllItems: (store, action) => {
      store.allItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.allItems = action.payload;
    });
  },
});

export const { setAllItems } = filterSlice.actions;

export default filterSlice.reducer;
