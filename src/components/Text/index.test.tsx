import { render, screen } from "@testing-library/react";
import Text from ".";

describe("Text Component", () => {
  let text: HTMLParagraphElement;

  it("Renders correctly", () => {
    render(<Text>Read Me</Text>);
    text = screen.getByText("Read Me");
    expect(text).toBeInTheDocument();
  });
});
