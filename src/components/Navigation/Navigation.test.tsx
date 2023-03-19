import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Тестирование списка", () => {
  it("Отображение списка", () => {
    render(<Navigation />);
    const list = screen.getByTestId("nav-list");
    const items = screen.getAllByTestId("nav-item");

    expect(list).toBeInTheDocument();
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("элемент1");
    expect(items[1]).toHaveTextContent("элемент2");
  });
});
