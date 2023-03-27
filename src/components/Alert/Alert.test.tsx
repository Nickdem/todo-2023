import { screen } from "@testing-library/react";
import { renderWithProviders, stateForTests } from "../../utils/forTests";
import Alert from "./Alert";

describe("Тестирование Алерта", () => {
  it("Алерт отображается", () => {
    renderWithProviders(<Alert />, {
      preloadedState: stateForTests("", "Ошибка", false),
    });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent("Ошибкаx");
  });
});
