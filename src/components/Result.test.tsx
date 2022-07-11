import { render, screen } from "@testing-library/react";
import Result from "./Result";

//How to test when a prop is required

test("renders learn react link", () => {
  render(
    <Result
      gif={{
        id: "abc123",
        title: "test title",
        url: "www.google.com",
        images: { original: { url: "www.image.com" } },
      }}
    />
  );
  const h3 = screen.getByRole("heading", { name: "test title" });
  expect(h3).toBeInTheDocument();
});

test("the root element has a class of results", () => {
  const { container } = render(
    <Result
      gif={{
        id: "abc123",
        title: "test title",
        url: "www.google.com",
        images: { original: { url: "www.image.com" } },
      }}
    />
  );
  const componentElement = container.firstChild;
  expect(componentElement).toHaveClass("Result");
});
