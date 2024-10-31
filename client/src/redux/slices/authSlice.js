import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { jwtDecode } from "jwt-decode";

export const loginUser = createAsyncThunk("auth/login", async (credentials) => {
  const response = await api.login(credentials);
  const token = response.data.token;
  localStorage.setItem("token", token);
  return jwtDecode(token);
});

export const signupUser = createAsyncThunk("auth/signup", async (userData) => {
  const response = await api.signup(userData);
  const token = response.data.token;
  localStorage.setItem("token", token);
  return jwtDecode(token);
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
