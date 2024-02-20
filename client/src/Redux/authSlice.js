import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogIn = true;
      state.user = action.payload;
    },
    logout: (state, action) => {
      (state.isLogIn = false), (state.user = null);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
