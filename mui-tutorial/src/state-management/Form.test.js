/** @format */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Form from "./Form";

test("test Form", () => {
  render(<Form />);
  const textFile = screen.getByText(/Simple Form/i);
  expect(textFile).toBeInTheDocument();
});
