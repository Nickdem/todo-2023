import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders, stateForTests } from "../../utils/forTests";

describe("Тестирование Лоадера", () => {
  it("Лоадер появляется и исчезает", async() => {
    renderWithProviders(<App />, {
      preloadedState: stateForTests("", "", true),
    });
    const loader = screen.getAllByTestId("loader");
    expect(loader[0]).toBeInTheDocument();
    await waitForElementToBeRemoved(loader[0], { timeout: 5000 }).then(() => {
      expect(loader[0]).not.toBeInTheDocument();
    });
  });
});
