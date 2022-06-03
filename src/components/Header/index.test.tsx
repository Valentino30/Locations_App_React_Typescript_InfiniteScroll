import { render, screen } from "@testing-library/react";

import Header from ".";

describe("Header Component", () => {
  let text: HTMLParagraphElement;

  it("Renders correctly", () => {
    render(<Header>Read Me</Header>);
    text = screen.getByText("Read Me");
    expect(text).toBeInTheDocument();
  });
});
