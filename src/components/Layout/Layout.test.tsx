import App from "../../App";
import { renderWithProviders } from "../../utils/forTests";

describe("Тестирование Лайоута", () => {
  it("временный", () => {
    renderWithProviders(<App />);

    expect(document.body).toBeInTheDocument(); //временно
  });
});
