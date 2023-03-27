import { screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders } from "../../utils/forTests";

describe("Тестирование Лайоута", () => {
  it("Отображение лайоута", () => {
    renderWithProviders(<App />);
    const header = screen.getByTestId("header");
    const filter = screen.getByTestId("filter");
    const columns = screen.getByTestId("columns");

    expect(header).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
    expect(columns).toBeInTheDocument();
  });
});
