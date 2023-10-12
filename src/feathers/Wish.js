import {createSlice} from "@reduxjs/toolkit";

export const wish = createSlice({
  name: "Wish",
  initialState: {
    wishlist: [],
  },
  reducers: {
    List: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
      // if (stata.List != undefined) {}
    },
    Filter: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (arrow) => arrow.id !== action.payload
      );
      console.log(state.wishlist);
    },
    Clear: (state) => {
      state.wishlist = [];
    },
  },
});
export const {List, Filter, Clear} = wish.actions;
export default wish.reducer;
