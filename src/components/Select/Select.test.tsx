import { fireEvent, screen } from "@testing-library/react";
import { colors } from "../../utils/consts";
import { renderWithProviders, stateForTests } from "../../utils/forTests";
import Filter from "../Filter";
import Select from "./Select";

describe("Отображение селекта", () => {
  it("Селект отображается", () => {
    renderWithProviders(
      <Select
        label="tags"
        item="red"
        items={colors}
        changeSelect={() => {}}
        all={true}
      />,
    );
    const select = screen.getByTestId("select");

    expect(select).toBeInTheDocument();
    expect(select).toHaveTextContent("красный");
  });

  it("Селект открывается и закрывается", () => {
    renderWithProviders(<Filter />, {
      preloadedState: stateForTests("Natalia", "", true),
    });
    const selectValue = screen.getByTestId("select-value");

    expect(selectValue).toBeInTheDocument();
    fireEvent.click(selectValue);

    const tagList = screen.getByTestId("tag-list");
    const selectValues = screen.getAllByTestId("select-value");
    expect(tagList).toBeInTheDocument();
    expect(selectValues).toHaveLength(5);

    fireEvent.click(selectValues[4]);
    expect(tagList).not.toBeInTheDocument();
    const selectValuesUpdate = screen.getAllByTestId("select-value");
    expect(selectValuesUpdate).toHaveLength(1);
    expect(selectValue).toHaveTextContent("синий");
  });
});
