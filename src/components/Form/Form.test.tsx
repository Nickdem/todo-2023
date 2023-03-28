import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders, stateForTests } from "../../utils/forTests";

describe("Тестирование формы авторизации", () => {
  it("Отображение формы создания", () => {
    renderWithProviders(<App />, {
      preloadedState: stateForTests("Vasya", "", true),
    });
    const btn = screen.getByTestId("column-btn");
    fireEvent.click(btn);
    const form = screen.getByTestId("form");
    const title = screen.getByTestId("form-title");
    const labels = screen.getAllByTestId("form-label");
    const inp = screen.getAllByTestId("form-input");
    const ta = screen.getByTestId("form-textarea");
    const selects = screen.getAllByTestId("select");
    const save = screen.getByTestId("save-btn");

    expect(form).toBeInTheDocument();
    expect(title).toHaveTextContent("Форма создания задачи");
    expect(labels).toHaveLength(3);
    expect(labels[1]).toHaveTextContent("Название");
    expect(labels[2]).toHaveTextContent("Описание");
    expect(inp[1]).toBeInTheDocument();
    expect(ta).toBeInTheDocument();
    expect(selects[1]).toHaveTextContent("красный");
    expect(selects[2]).toHaveTextContent("К работе");
    expect(save).toHaveTextContent("Создать");
  });
});
