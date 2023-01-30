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
    },
    clearCart: (store) => {
      store.items = [];
    },
    increaseProducts: (store, action) => {
      store.items.forEach((obj) => {
        if (obj.id === action.payload) {
          obj.count++;
        } else return;
      });
    },
    decreaseProducts: (store, action) => {
      store.items.forEach((obj) => {
        if (obj.id === action.payload) {
          obj.count--;
        } else return;
      });
    },
  },
});

export const { addProduct, removeProduct, clearCart, increaseProducts, decreaseProducts } =
  cardSlice.actions;
export default cardSlice.reducer;
