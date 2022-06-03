import { render, screen, fireEvent } from "@testing-library/react";

import Button from ".";

describe("Button Component", () => {
  let button: HTMLButtonElement;
  const onClick = jest.fn();
  it("Renders correctly", () => {
    render(<Button onClick={onClick}>Click Me</Button>);
    button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Fires the onClick event when the user clicks it", () => {
    render(<Button onClick={onClick}>Click Me</Button>);
    button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
