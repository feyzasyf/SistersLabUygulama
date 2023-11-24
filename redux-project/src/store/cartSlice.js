import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

const initialState = {
  total: 0,
  items: cartItems,
  amount: 4,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const itemToUpdate = state.items.find(
        (item) => item.id === action.payload
      );
      itemToUpdate.amount += 1;
    },
    decrement: (state, action) => {
      const itemToUpdate = state.items.find(
        (item) => item.id === action.payload
      );
      itemToUpdate.amount -= 1;
      if (itemToUpdate.amount < 1)
        state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    calculateTotals: (state) => {
      const amount = state.items.reduce(
        (total, item) => (total += item.amount),
        0
      );
      state.amount = amount;
      state.total = state.items.reduce(
        (total, item) => (total += item.price * item.amount),
        0
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
