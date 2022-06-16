import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

test("renders heading", () => {
  const { getByText } = render(<Heading />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders heading with argument", () => {
  const { getByText } = render(<Heading name={`World`} />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});