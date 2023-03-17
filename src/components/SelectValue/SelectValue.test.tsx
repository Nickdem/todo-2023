import { render, screen } from "@testing-library/react";
import SelectValue from "./SelectValue";

describe("Отображение значения", () => {
  it("Значение отображается", () => {
    render(
      <SelectValue
        cls="value"
        container={true}
        color={"red"}
        clickHandler={() => {}}
      />,
    );
    const selectValue = screen.getByTestId("select-value");
    const selectText = screen.getByTestId("select-text");
    const tag = screen.getByTestId("tag");

    expect(selectValue).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass("tag tag--red");
    expect(selectText).toHaveTextContent("красный");
  });
});
