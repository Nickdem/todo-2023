import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
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

  
  //   renderWithProviders(<App />);
  //   const signin = screen.getByText("Войти");
  //   fireEvent.click(signin);
  //   const form = screen.getByTestId("authform");
  //   const title = screen.getByTestId("authform-title");
  //   const label = screen.getByTestId("authform-label");
  //   const inp = screen.getByTestId("authform-input");
  //   const btn = screen.getByTestId("authform-btn");
  //   expect(form).toBeInTheDocument();
  //   expect(title).toHaveTextContent("Форма авторизации");
  //   expect(label).toHaveTextContent("Ваше имя:");
  //   expect(inp).toBeInTheDocument();
  //   expect(btn).toHaveTextContent("Войти");
  // });
});
