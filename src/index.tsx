import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Error from "./components/Error";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/todo-2023">
      <Error>
        <Provider store={store}>
          <App />
        </Provider>
      </Error>
    </BrowserRouter>
  </React.StrictMode>,
);
