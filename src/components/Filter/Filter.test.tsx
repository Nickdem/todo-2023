import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/forTests";
import Filter from "./Filter";

describe("Тестирование фильтра", () => {
  it("Селект открывается и закрывается", () => {
    renderWithProviders(<Filter />);
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
