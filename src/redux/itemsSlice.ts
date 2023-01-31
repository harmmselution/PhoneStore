import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICards } from '../components/Home/Home';
interface IAllItems {
  allItems: ICards[];
  status: string;
}
const initialState: IAllItems = {
  allItems: [],
  status: 'loading',
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.allItems = [];
      state.status = 'loading';
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.allItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = 'error';
      state.allItems = [];
    });
  },
});

export default filterSlice.reducer;
