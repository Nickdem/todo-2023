import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

describe("Тестирование Лайоута", () => {
  it("временный", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(document.body).toBeInTheDocument(); //временно
  });
});
