import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/forTests";
import Navigation from "./Navigation";

describe("Тестирование навигации", () => {
  it("Отображение ссылок авторизации", () => {
    renderWithProviders(<Navigation />);
    const list = screen.getByTestId("nav-list");
    const items = screen.getAllByTestId("nav-link");

    expect(list).toBeInTheDocument();
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Войти");
    expect(items[1]).toHaveTextContent("Регистрация");
  });

  it("Отображение выхода из аккаунта", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        auth: { currName: "aaa", form: {} },
        todos: {
          list: { todo: [], inprogress: [], done: [] },
          form: {
            title: "",
            description: "",
            id: "",
            tag: "",
          },
          filter: "all",
        },
      },
    });
    const list = screen.getByTestId("nav-list");
    const items = screen.getAllByTestId("exit-btn");

    expect(list).toBeInTheDocument();
    expect(items).toHaveLength(1);
    expect(items[0]).toHaveTextContent("Выйти из аккаунта(aaa)");
  });
});
