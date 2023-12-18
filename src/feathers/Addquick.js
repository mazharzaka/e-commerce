import {createSlice} from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "quick",
  initialState: {
    cart: [],
  },
  reducers: {
    Addquick: (state, action) => {
      let item = state.cart.find((e) => e.id === action.payload.id);
      if (state.cart.length === 0) {
        state.cart = [action.payload];
      } else if (state.cart.length > 0 && item === undefined) {
        state.cart = [...state.cart, action.payload];
      } else {
        item.qty = item.qty + action.payload.qty;
      }
    },
    Qty: (state, action) => {
      let item = state.cart.find((e) => e.id === action.payload.id);
      item.qty = action.payload.qty;
    },
    Delete: (state, action) => {
      state.cart = state.cart.filter((arrow) => arrow.id !== action.payload);
      console.log(state);
    },
    Clearcart: (state, action) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {Addquick, Qty, Delete, Clearcart} = CartSlice.actions;

export default CartSlice.reducer;
