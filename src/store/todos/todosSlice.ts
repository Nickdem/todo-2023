import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStringObj, ITodoObj, ITodosObj } from "../../utils/interfaces";
import { getAllTodos, createTodo } from "../../services/todoService";

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
    item.id = Date.now().toString();
    await createTodo(item);
    return item;
  },
);

interface ITodosState {
  list: ITodosObj;
  form: ITodoObj;
}

const initialState: ITodosState = {
  list: { todo: [], inprogress: [], done: [] },
  form: {
    title: "",
    description: "",
    id: "",
    tag: "",
  },
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
  },
  extraReducers: (builder) => {
    builder.addCase(getTodoList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(createTodoItem.fulfilled, (state, action) => {
      state.list.todo.push(action.payload);
    });
  },
});

export const { setAllTodos, setForm } = todosSlice.actions;
export default todosSlice.reducer;
