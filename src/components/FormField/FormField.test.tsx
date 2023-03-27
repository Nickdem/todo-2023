import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders } from "../../utils/forTests";
import FormField from "./FormField";

describe("Тестирование полей формы", () => {
  it("Отображение поля формы", () => {
    render(
      <FormField
        name="field"
        label="field"
        value="123"
        changeHandler={() => {}}
        type="input"
      />,
    );
    const label = screen.getByTestId("form-label");
    const inp = screen.getByTestId("form-input");

    expect(label).toHaveTextContent("field");
    expect(inp).toBeInTheDocument();
    expect(inp).toHaveValue("123");
  });
});
