import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders, stateForTests } from "../../utils/forTests";
import TodoForm from "./TodoForm";

describe("Тестирование формы задач", () => {
  it("Отображение формы создания", () => {
    renderWithProviders(<App />, {
      preloadedState: stateForTests("Vasya", "", true),
    });
    const btn = screen.getByTestId("column-btn");
    fireEvent.click(btn);
    const form = screen.getByTestId("form");
    const title = screen.getByTestId("form-title");
    const labels = screen.getAllByTestId("form-label");
    const inp = screen.getByTestId("form-input");
    const ta = screen.getByTestId("form-textarea");
    const selects = screen.getAllByTestId("select");
    const save = screen.getByTestId("save-btn");

    expect(form).toBeInTheDocument();
    expect(title).toHaveTextContent("Форма создания задачи");
    expect(labels).toHaveLength(2);
    expect(labels[0]).toHaveTextContent("Название");
    expect(labels[1]).toHaveTextContent("Описание");
    expect(inp).toBeInTheDocument();
    expect(ta).toBeInTheDocument();
    expect(selects[1]).toHaveTextContent("красный");
    expect(selects[2]).toHaveTextContent("К работе");
    expect(save).toHaveTextContent("Создать");
  });

  it("Отображение формы редактирования", async () => {
    renderWithProviders(<TodoForm />, {
      preloadedState: stateForTests("Vasya", "", true),
    });

    const form = screen.getByTestId("form");
    const title = screen.getByTestId("form-title");
    const labels = screen.getAllByTestId("form-label");
    const inp = screen.getByTestId("form-input");
    const ta = screen.getByTestId("form-textarea");
    const selects = screen.getAllByTestId("select");
    const save = screen.getByTestId("save-btn");
    const del = screen.getByTestId("del-btn");
    expect(form).toBeInTheDocument();
    expect(title).toHaveTextContent("Форма редактирования задачи");
    expect(labels).toHaveLength(2);
    expect(labels[0]).toHaveTextContent("Название");
    expect(labels[1]).toHaveTextContent("Описание");
    expect(inp).toBeInTheDocument();
    expect(inp).toHaveValue("");
    expect(ta).toBeInTheDocument();
    expect(ta).toHaveValue("");
    expect(selects[0]).toHaveTextContent("красный");
    expect(selects[1]).toHaveTextContent("К работе");
    expect(save).toHaveTextContent("Сохранить");
    expect(del).toHaveTextContent("Удалить");
  });
});
