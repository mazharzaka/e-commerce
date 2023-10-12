import {createSlice} from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    data: (stata, action) => {
      stata.push(action.payload);
      // if (stata.data != undefined) {}
    },
  },
});
export const {data} = userslice.actions;
export default userslice.reducer;
