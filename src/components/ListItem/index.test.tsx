import { render, screen } from "@testing-library/react";

import ListItem from ".";

describe("ListItem Component", () => {
  let listItem: HTMLLIElement;
  let title: HTMLHeadingElement;
  let description: HTMLParagraphElement;

  it("Renders correctly", () => {
    render(
      <ListItem>
        <h1>Title</h1>
        <p>Description</p>
      </ListItem>
    );
    listItem = screen.getByRole("listitem");
    title = screen.getByText("Title");
    description = screen.getByText("Description");
    expect(listItem).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
