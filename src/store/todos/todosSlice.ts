import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStringObj, ITodoObj, ITodosObj } from "../../utils/interfaces";
import {
  getAllTodos,
  createTodo,
  getTodo,
  changeTodo,
} from "../../services/todoService";
import { formValues, todosValues } from "../../utils/consts";

export const getTodoList = createAsyncThunk(
  "todos/getTodoList",
  async (name: string) => {
    const res = await getAllTodos(name);
    return res;
  },
);

export const createTodoItem = createAsyncThunk(
  "todos/createTodoItem",
  async (item: ITodoObj) => {
    const res = await createTodo(item);
    return res;
  },
);

export const getTodoItemById = createAsyncThunk(
  "todos/getTodoItem",
  async (id: string) => {
    const res = await getTodo(id);
    return res;
  },
);

export const changeTodoItem = createAsyncThunk(
  "todos/changeTodoItem",
  async (item: ITodoObj) => {
    const idx = await changeTodo(item);
    return { item, idx };
  },
);

interface ITodosState {
  list: ITodosObj;
  form: ITodoObj;
  filter: string;
}

const initialState: ITodosState = {
  list: todosValues,
  form: formValues,
  filter: "all",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setAllTodos: (state, action: PayloadAction<ITodosObj>) => {
      state.list = action.payload;
    },
    setForm: (state, action: PayloadAction<IStringObj>) => {
      state.form = { ...state.form, ...action.payload };
    },
    setFormValues: (state, action: PayloadAction<ITodoObj>) => {
      state.form = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodoList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(createTodoItem.fulfilled, (state, action) => {
      state.list.todo.push(action.payload);
      state.form = formValues;
    });
    builder.addCase(getTodoItemById.fulfilled, (state, action) => {
      state.form = action.payload;
    });
    builder.addCase(changeTodoItem.fulfilled, (state, action) => {
      state.list.todo[action.payload.idx] = action.payload.item;
      state.form = formValues;
    });
  },
});

export const { setAllTodos, setForm, setFormValues, setFilter } =
  todosSlice.actions;
export default todosSlice.reducer;
