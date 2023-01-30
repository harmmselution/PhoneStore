import { createSlice } from '@reduxjs/toolkit';
interface ICartState {
  totalPrice: number;
  items: any[];
}
const initialState: ICartState = {
  totalPrice: 0,
  items: [],
};

const cardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (store, action) => {
      store.items.push(action.payload);
      store.totalPrice = store.items.reduce((sum, obj) => Number(obj.price) + sum, 0);
    },
  },
});

export const { addProduct } = cardSlice.actions;
export default cardSlice.reducer;
