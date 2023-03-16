import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import Modal from "./Modal";

const todo = {
  title: "дело1",
  description: "описание дело1",
  tag: "red",
  id: 1,
};

describe("Тестирование модального окна", () => {
  it("Модальное окно не отображается", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Я текст</div>
      </Modal>,
    );

    expect(document.body).toContainHTML("<body><div /></body>");
  });

  it("Модальное окно  отображается", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Я текст</div>
      </Modal>,
    );

    const modal = screen.getByTestId("modal");
    const backdrop = screen.getByTestId("backdrop");

    expect(modal).toBeInTheDocument();
    expect(backdrop).toBeInTheDocument();
    expect(modal).toContainHTML("<div>Я текст</div>");
  });

  it("Модальное окно открывается и закрывается", () => {
    render(<Todo item={todo} />);

    const todoEl = screen.getByTestId("todo");

    fireEvent.click(todoEl);

    const modal = screen.getByTestId("modal");
    const backdrop = screen.getByTestId("backdrop");

    expect(modal).toBeInTheDocument();
    expect(backdrop).toBeInTheDocument();
    expect(modal).toHaveTextContent("Я МОДАЛКА РЕДАКТИРОВАНИЯx");

    const close = screen.getByTestId("modal-close");
    fireEvent.click(close);

    expect(modal).not.toBeInTheDocument();
    expect(backdrop).not.toBeInTheDocument();
  });
});
