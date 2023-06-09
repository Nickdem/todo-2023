import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import type { AppStore, RootState } from "../store";
import authReducer from "../store/auth/authSlice";
import todosReducer from "../store/todos/todosSlice";
import { MemoryRouter } from "react-router-dom";
import { formValues, getMockTodos } from "./consts";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({
      reducer: { auth: authReducer, todos: todosReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
      </Provider>
    );
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export const stateForTests = (
  currName: string,
  error: string,
  showItems: boolean,
  todosLoading?: boolean,
  todoLoading?: boolean,
  authLoading?: boolean,
): PreloadedState<RootState> => ({
  auth: { currName, form: { name: "" }, loading: authLoading || false, error },
  todos: {
    list: showItems ? getMockTodos : [],
    form: formValues,
    filter: { search: "", tag: "all" },
    loading: todosLoading || false,
    formLoading: todoLoading || false,
  },
});
