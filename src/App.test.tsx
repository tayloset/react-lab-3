import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test("properly calls the submit event listener", () => {
  //Fake function
  const spy = jest.fn()
  render(<App />);
  const termEl = screen.getByRole("textbox",{name: "term"})
  fireEvent.change(termEl, {target:{value:"some input"}};
  fireEvent.click(screen.getByRole("button",{name:"Search"}))
  expect(spy).toBeCalledWith()
});
