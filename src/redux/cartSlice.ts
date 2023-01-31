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
      let findItem = store.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        store.items.push({ ...action.payload, count: 1 });
      }
      store.totalPrice = store.items.reduce((sum, obj) => Number(obj.price) * obj.count + sum, 0);
    },
    removeProduct: (store, action) => {
      store.items = store.items.filter((obj) => obj.id !== action.payload);
      store.totalPrice = store.items.reduce((sum, obj) => Number(obj.price) * obj.count + sum, 0);
    },
    clearCart: (store) => {
      store.items = [];
      store.totalPrice = 0;
    },

    decreaseProducts: (store, action) => {
      let findItem = store.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      store.totalPrice = store.items.reduce((sum, obj) => Number(obj.price) * obj.count + sum, 0);
    },
  },
});

export const { addProduct, removeProduct, clearCart, decreaseProducts } = cardSlice.actions;
export default cardSlice.reducer;
