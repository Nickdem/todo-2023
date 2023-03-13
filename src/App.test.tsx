import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 123 text", () => {
  render(<App />);
  const el = screen.getByTestId("lol");

  expect(el).toHaveTextContent("123");
});
