import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("renders a link with the text Favorites", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", { name: "Favorites" });
  expect(linkElement).toBeInTheDocument();
});

test("renders a link with the text gif app", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", { name: "GIF App" });
  expect(linkElement).toBeInTheDocument();
});

test("renders a link with the text gifhy", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", { name: "GIPHY" });
  expect(linkElement).toBeInTheDocument();
});

test("renders a link with the proper attrbute", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", { name: "GIPHY" });
  expect(linkElement).toHaveAttribute("href", "https://developers.giphy.com/");
});
