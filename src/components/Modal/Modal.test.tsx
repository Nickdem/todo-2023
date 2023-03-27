import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders, stateForTests } from "../../utils/forTests";
import AuthForm from "../AuthForm";
import Modal from "./Modal";

describe("Тестирование модального окна", () => {
  it("Модальное окно открывается и закрывается", () => {
    renderWithProviders(<App />, {
      preloadedState: stateForTests("Vanya", "", true),
    });
    const btn = screen.getByTestId("column-btn");
    fireEvent.click(btn);
    const modal = screen.getByTestId("modal");
    const backdrop = screen.getByTestId("backdrop");

    expect(modal).toBeInTheDocument();
    expect(backdrop).toBeInTheDocument();
    expect(modal).toHaveTextContent("Форма создания задачиНазваниеОписаниекрасныйК работеСоздатьx");

    const close = screen.getByTestId("modal-close");
    fireEvent.click(close);

    expect(modal).not.toBeInTheDocument();
    expect(backdrop).not.toBeInTheDocument();
  });
});
