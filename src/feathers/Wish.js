import {createSlice} from "@reduxjs/toolkit";

export const wish = createSlice({
  name: "Wish",
  initialState: {
    wishlist: [],
    ids: [],
    watchlist: [],
  },
  reducers: {
    List: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
      // if (stata.List != undefined) {}
    },
    watchlist: (state, action) => {
      state.watchlist = [action.payload];
    },
    Classid: (state, action) => {
      state.ids = [...state.ids, action.payload];
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
      state.ids = [];
    },
  },
});
export const {List, Filter, Clear, Classid, watchlist} = wish.actions;
export default wish.reducer;
