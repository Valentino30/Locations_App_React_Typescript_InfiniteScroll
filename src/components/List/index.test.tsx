import { render, screen } from "@testing-library/react";

import List from ".";
import ListItem from "../ListItem";

describe("List Component", () => {
  let list: HTMLUListElement;
  let listItems: HTMLLIElement[];

  it("Renders correctly", () => {
    render(
      <List>
        <ListItem>
          <h1>Title</h1>
          <p>Description</p>
        </ListItem>
        <ListItem>
          <h1>Title</h1>
          <p>Description</p>
        </ListItem>
      </List>
    );
    list = screen.getByRole("list");
    listItems = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
  });
});
