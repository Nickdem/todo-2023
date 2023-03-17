import { render, screen } from "@testing-library/react";
import Tag from "./Tag";

describe("Отображение тега", () => {
  it("Тег отображается", () => {
    render(<Tag color={"green"} />);
    const tag = screen.getByTestId("tag");

    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass("tag tag--green");
  });
});
