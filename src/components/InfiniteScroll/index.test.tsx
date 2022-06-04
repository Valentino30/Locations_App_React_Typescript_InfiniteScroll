import { render, screen } from "@testing-library/react";

import InfiniteScroll from ".";

import List from "../List";
import Text from "../Text";
import Header from "../Header";
import ListItem from "../ListItem";

import { generateMockItems } from "../../utils";
import { FELocationType } from "../../types/location";

describe("InfiniteScroll Component", () => {
  let list: HTMLUListElement;
  let listItems: HTMLLIElement[];
  let headings: HTMLHeadingElement[];

  const items = generateMockItems(3);
  const loadMore = jest.fn();
  const totalLocations = 100;

  it("Renders one list, three list items and four headings", () => {
    render(
      <InfiniteScroll
        items={items}
        loadMoreItems={loadMore}
        totalNumberOfItems={totalLocations}
      >
        <List>
          {items.map(({ id, name, type, details, address }: FELocationType) => (
            <ListItem key={id}>
              <Header as="h3" capitalize>
                {name}
              </Header>
              <Text>{`Details: ${details}`}</Text>
              <Text>{`Type: ${type}`}</Text>
              <Text>
                {`${address.street}, ${address.zip} ${address.city}, ${address.state}.`}
              </Text>
            </ListItem>
          ))}
        </List>
      </InfiniteScroll>
    );

    list = screen.getByRole("list");
    listItems = screen.getAllByRole("listitem");
    headings = screen.getAllByRole("heading");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
    expect(headings).toHaveLength(4);
  });
});
