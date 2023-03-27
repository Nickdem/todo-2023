import { screen } from "@testing-library/react";
import { renderWithProviders, stateForTests } from "../../utils/forTests";
import TagList from "./SelectList";

describe("Отображение списка тегов", () => {
  it("Список  тегов отображается", () => {
    renderWithProviders(
      <TagList
        itemsList={["red", "green", "blue"]}
        cls={"list"}
        clickHandler={() => {}}
      />,
      { preloadedState: stateForTests("Vasya", "", true) },
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
