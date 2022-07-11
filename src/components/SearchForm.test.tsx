import { render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";

test("renders learn react link", () => {
  render(<SearchForm />);
  const submitButton = screen.getByRole("button", { name: "Search" });
  expect(submitButton).toBeInTheDocument();
});
