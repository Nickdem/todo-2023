import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

describe("Тестирование фильтра", () => {
  it("Отображение фильтра", () => {
    render(<Filter />);
    const filter = screen.getByTestId("filter");

    expect(filter).toBeInTheDocument();
  });
});
