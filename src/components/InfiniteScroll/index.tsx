import { ReactNode } from "react";
import Scroll from "react-infinite-scroll-component";

import Header from "../Header";
import Container from "../Container";

type InfiniteScrollProps = {
  totalNumberOfItems: number;
  loadMoreItems: () => void;
  children: ReactNode;
  items: any[];
};
export default function InfiniteScroll({
  totalNumberOfItems,
  loadMoreItems,
  children,
  items,
}: InfiniteScrollProps) {
  return (
    <Container
      fullWidth
      height="80vh"
      overflow="auto"
      id="scrollableDiv"
      borderTop="2px solid"
      firstChildWidth="100%"
    >
      <Scroll
        next={loadMoreItems}
        dataLength={items.length}
        loader={<Header as="h4">Loading more locations ...</Header>}
        scrollableTarget="scrollableDiv"
        hasMore={items.length < totalNumberOfItems}
      >
        {children}
      </Scroll>
    </Container>
  );
}
