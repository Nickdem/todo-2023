import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  getUser,
  regUser,
  setUser,
  logoutUser,
} from "../../services/authService";
import { IStringObj } from "../../utils/interfaces";

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
  currName: string;
  form: IStringObj;
}

const initialState: IAuthState = {
  currName: "",
  form: { value: "" },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.currName = action.payload;
    },
    logout: (state) => {
      state.currName = "";
    },
    setForm: (state, action: PayloadAction<string>) => {
      state.form.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthName.fulfilled, (state, action) => {
      state.currName = action.payload;
    });
    builder.addCase(setAuthName.fulfilled, (state, action) => {
      state.currName = action.payload;
      state.form.name = "";
    });
    builder.addCase(setAuthName.rejected, (state) => {
      state.currName = "";
      state.form.name = "";
    });
    builder.addCase(regUserName.fulfilled, (state, action) => {
      state.currName = action.payload;
      state.form.name = "";
    });
    builder.addCase(regUserName.rejected, (state) => {
      state.currName = "";
      state.form.name = "";
    });
    builder.addCase(logoutUserName.fulfilled, (state) => {
      state.currName = "";
    });
  },
});

export const { login, logout, setForm } = authSlice.actions;
export default authSlice.reducer;
