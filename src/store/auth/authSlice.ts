import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  getUser,
  regUser,
  setUser,
  logoutUser,
} from "../../services/authService";

export const getAuthName = createAsyncThunk("auth/getName", async () => {
  const res = await getUser();
  return res;
});

export const setAuthName = createAsyncThunk(
  "auth/setName",
  async (name: string) => {
    const res = await setUser(name);
    if (res?.err) {
      console.log(res.err);
      throw new Error();
    }
    return name;
  },
);

export const regUserName = createAsyncThunk(
  "auth/regName",
  async (name: string) => {
    const res = await regUser(name);
    if (res?.err) {
      console.log(res.err);
      throw new Error();
    }
    return name;
  },
);

export const logoutUserName = createAsyncThunk("auth/logoutName", async () => {
  await logoutUser();
});

interface IAuthState {
  name: string;
}

const initialState: IAuthState = {
  name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    logout: (state) => {
      state.name = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthName.fulfilled, (state, action) => {
      state.name = action.payload;
    });
    builder.addCase(setAuthName.fulfilled, (state, action) => {
      state.name = action.payload;
    });
    builder.addCase(setAuthName.rejected, (state) => {
      state.name = "";
    });
    builder.addCase(regUserName.fulfilled, (state, action) => {
      state.name = action.payload;
    });
    builder.addCase(regUserName.rejected, (state) => {
      state.name = "";
    });
    builder.addCase(logoutUserName.fulfilled, (state) => {
      state.name = "";
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
