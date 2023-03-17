import { render, screen } from "@testing-library/react";
import TagList from "./TagList";

describe("Отображение списка тегов", () => {
  it("Список  тегов отображается", () => {
    render(
      <TagList
        itemsList={["red", "green", "blue"]}
        cls={"list"}
        clickHandler={() => {}}
      />,
    );
    const tagList = screen.getByTestId("tag-list");
    const selectValues = screen.getAllByTestId("select-value");
    const tags = screen.getAllByTestId("tag");
    const selectTexts = screen.getAllByTestId("select-text");

    expect(tagList).toBeInTheDocument();
    expect(selectValues).toHaveLength(3);
    expect(tags).toHaveLength(3);
    expect(selectTexts).toHaveLength(3);
    expect(tags[2]).toHaveClass("tag tag--blue");
    expect(selectTexts[1]).toHaveTextContent("зелёный");
  });
});
