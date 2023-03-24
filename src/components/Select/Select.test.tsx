import { fireEvent, render, screen } from "@testing-library/react";
import Select from "./Select";

describe("Отображение селекта", () => {
  it("Селект отображается", () => {
    render(<Select value="красный" changeSelect={()=>{}}  onlyColors={true}/>);
    const select = screen.getByTestId("select");

    expect(select).toBeInTheDocument();
    expect(select).toHaveTextContent("все");
  });

  it("Селект открывается и закрывается", () => {
    render(<Select value="красный" changeSelect={()=>{}} onlyColors={true} />);
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
