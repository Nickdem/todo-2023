import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import App from "../../App";

const mock = {
  text: "add",
  cls: "add-btn",
  clickHandler: () => {
    console.log(this);
  },
  testid: "btn",
};

describe("Тестирование кнопки", () => {
  it("Отображение кнопки", () => {
    render(<Button {...mock} />);
    const el = screen.getByTestId("btn");

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("add");
  });

  it("Работоспособность кнопки", () => {
    render(<App />);
    const btns = screen.getAllByTestId("column-btn");
    fireEvent.click(btns[0]);
    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent("Я МОДАЛКА СОЗДАНИЯx");
  });
});
