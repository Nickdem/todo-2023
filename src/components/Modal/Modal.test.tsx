import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders } from "../../utils/forTests";

describe("Тестирование модального окна", () => {
  it("Модальное окно открывается и закрывается", () => {
    renderWithProviders(<App />);
    const links = screen.getAllByTestId("nav-link");
    fireEvent.click(links[0]);
    const modal = screen.getByTestId("modal");
    const backdrop = screen.getByTestId("backdrop");

    expect(modal).toBeInTheDocument();
    expect(backdrop).toBeInTheDocument();
    expect(modal).toHaveTextContent("Форма авторизацииВаше имя:Войтиx");

    const close = screen.getByTestId("modal-close");
    fireEvent.click(close);

    expect(modal).not.toBeInTheDocument();
    expect(backdrop).not.toBeInTheDocument();
  });
});
