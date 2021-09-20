import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders onboarding title", () => {
  render(<App />);
  const titleElement = screen.getByText(/onboarding/i);
  expect(titleElement).toBeInTheDocument();
});
