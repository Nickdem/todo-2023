import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/forTests";
import AuthForm from "./AuthForm";

describe("Тестирование формы авторизации", () => {
  it("Отображение формы авторизации", () => {
    renderWithProviders(<AuthForm />);
    const form = screen.getByTestId("form");
    const title = screen.getByTestId("form-title");
    const label = screen.getByTestId("form-label");
    const inp = screen.getByTestId("form-input");
    const btn = screen.getByTestId("save-btn");
    expect(form).toBeInTheDocument();
    expect(title).toHaveTextContent("Форма авторизации");
    expect(label).toHaveTextContent("Ваше имя");
    expect(inp).toBeInTheDocument();
    expect(btn).toHaveTextContent("Регистрация");
  });
});
