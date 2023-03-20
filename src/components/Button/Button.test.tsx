import { render, screen } from "@testing-library/react";
import Button from "./Button";

const mock = {
  text: "add",
  cls: "add-btn",
  clickHandler: () => {},
  testid: "btn",
};

describe("Тестирование кнопки", () => {
  it("Отображение кнопки", () => {
    render(<Button {...mock} />);
    const el = screen.getByTestId("btn");

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(mock.text);
    expect(el).toHaveClass(mock.cls);
  });
});
