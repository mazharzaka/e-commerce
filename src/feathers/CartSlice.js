import {createSlice} from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "quick",
  initialState: [],

  reducers: {
    Addquick: (state, action) => {
      state.length > 1n
        ? (state = state.map((e) =>
            e.id !== action.payload
              ? state.push(action.payload)
              : console.log(false)
          ))
        : state.length == 0
        ? (state = state.push(action.payload))
        : console.log(action.payload);
    },
    Qty: (state, action) => {
      if (state.length > 1) {
        state = state.map((e) =>
          e.id === action.payload ? (e.qty = e.qty + 1) : console.log(false)
        );
      }
      console.log(state.length);
      // if (pro !== undefined) {
      //   state = state.filter((e) => e._id !== action.payload);
      // }
    },
  },
});
