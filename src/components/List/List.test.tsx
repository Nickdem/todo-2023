import { render, screen } from "@testing-library/react";
import List from "./List";

const mock = {
  tag: "ul",
  attr: {
    className: "navigation-list",
    key: "nav-list",
    "data-testid": "nav-list",
  },
  childrens: [
    {
      tag: "li",
      attr: {
        className: "navigation-item",
        key: "nav-item1",
        "data-testid": "nav-item",
      },
      text: "элемент1",
    },
    {
      tag: "li",
      attr: {
        className: "navigation-item",
        key: "nav-item2",
        "data-testid": "nav-item",
      },
      text: "элемент2",
    },
  ],
};

describe("Тестирование списка", () => {
  it("Отображение списка", () => {
    render(<List items={mock} />);
    const list = screen.getByTestId("nav-list");
    const items = screen.getAllByTestId("nav-item");

    expect(list).toBeInTheDocument();
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("элемент1");
    expect(items[1]).toHaveTextContent("элемент2");
  });
});
