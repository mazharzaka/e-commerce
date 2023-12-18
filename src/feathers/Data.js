import {createSlice} from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    data: (stata, action) => {
      if (stata.length === 0) {
        stata.push(action.payload);
      }
      // if (stata.data != undefined) {}
    },
  },
});
export const {data} = userslice.actions;
export default userslice.reducer;
