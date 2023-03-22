import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders } from "../../utils/forTests";
import AuthForm from "./AuthForm";

describe("Тестирование формы авторизации", () => {
  it("Отображение формы по умолчанию", () => {
    renderWithProviders(<AuthForm />);
    const form = screen.getByTestId("authform");
    const title = screen.getByTestId("authform-title");
    const label = screen.getByTestId("authform-label");
    const inp = screen.getByTestId("authform-input");
    const btn = screen.getByTestId("authform-btn");
    expect(form).toBeInTheDocument();
    expect(title).toHaveTextContent("Форма авторизации");
    expect(label).toHaveTextContent("Ваше имя:");
    expect(inp).toBeInTheDocument();
    expect(btn).toHaveTextContent("Регистрация");
  });

  it("Отображение формы авторизации", () => {
    renderWithProviders(<App />);
    const signin = screen.getByText("Войти");
    fireEvent.click(signin);
    const form = screen.getByTestId("authform");
    const title = screen.getByTestId("authform-title");
    const label = screen.getByTestId("authform-label");
    const inp = screen.getByTestId("authform-input");
    const btn = screen.getByTestId("authform-btn");
    expect(form).toBeInTheDocument();
    expect(title).toHaveTextContent("Форма авторизации");
    expect(label).toHaveTextContent("Ваше имя:");
    expect(inp).toBeInTheDocument();
    expect(btn).toHaveTextContent("Войти");
  });
});
