import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders } from "../../utils/forTests";

describe("Тестирование формы задач", () => {
  it("Отображение формы создания", () => {
    renderWithProviders(<App />);
    const btn = screen.getByText("Добавить");
    fireEvent.click(btn);
    const form = screen.getByTestId("todoform");
    const title = screen.getByTestId("todoform-title");
    const labels = screen.getAllByTestId("todoform-label");
    const inp = screen.getByTestId("todoform-input");
    const ta = screen.getByTestId("todoform-textarea");
    const save = screen.getByTestId("save-btn");

    expect(form).toBeInTheDocument();
    expect(title).toHaveTextContent("Форма создания задачи");
    expect(labels).toHaveLength(2);
    expect(labels[0]).toHaveTextContent("Название:");
    expect(labels[1]).toHaveTextContent("Описание:");
    expect(inp).toBeInTheDocument();
    expect(ta).toBeInTheDocument();
    expect(save).toHaveTextContent("Создать");
  });

  it("Отображение формы редактирования", () => {
    renderWithProviders(<App />);
    const todo = screen.getAllByTestId("todo");
    fireEvent.click(todo[0]);
    const form = screen.getByTestId("todoform");
    const title = screen.getByTestId("todoform-title");
    const labels = screen.getAllByTestId("todoform-label");
    const inp = screen.getByTestId("todoform-input");
    const ta = screen.getByTestId("todoform-textarea");
    const save = screen.getByTestId("save-btn");
    const del = screen.getByTestId("del-btn");
    expect(form).toBeInTheDocument();
    expect(title).toHaveTextContent("Форма редактирования задачи");
    expect(labels).toHaveLength(2);
    expect(labels[0]).toHaveTextContent("Название:");
    expect(labels[1]).toHaveTextContent("Описание:");
    expect(inp).toBeInTheDocument();
    expect(inp).toHaveValue("дело1");
    expect(ta).toBeInTheDocument();
    expect(ta).toHaveValue("описание дело1");
    expect(save).toHaveTextContent("Сохранить");
    expect(del).toHaveTextContent("Удалить");
  });
});
