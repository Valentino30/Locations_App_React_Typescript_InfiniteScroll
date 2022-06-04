import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import List from "./components/List";
import Text from "./components/Text";
import Button from "./components/Button";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Container from "./components/Container";

import { useLocation } from "./hooks/location";
import { FELocationType } from "./types/location";

function App() {
  const { getLocations, getPaginatedLocations, locations, totalLocations } =
    useLocation();

  useEffect(() => {
    getPaginatedLocations(0, 3);
  }, [getPaginatedLocations]);

  const loadMore = () => {
    getPaginatedLocations(locations.length, 3);
  };

  return (
    <Container>
      <Header as="h1">Locations Lister</Header>
      <Button onClick={getLocations}>Get Locations</Button>
      <div
        id="scrollableDiv"
        style={{
          height: 300,
          width: "100%",
          overflow: "auto",
          display: "flex",
        }}
      >
        <InfiniteScroll
          dataLength={locations.length}
          next={loadMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
          hasMore={locations.length < totalLocations}
        >
          <List>
            {locations.map(
              ({ id, name, type, details, address }: FELocationType) => (
                <ListItem key={id}>
                  <Header as="h3">{name}</Header>
                  <Text>{`Details: ${details}`}</Text>
                  <Text>{`Type: ${type}`}</Text>
                  <Text>
                    {`${address.street}, ${address.zip} ${address.city}, ${address.state}.`}
                  </Text>
                </ListItem>
              )
            )}
          </List>
        </InfiniteScroll>
      </div>
    </Container>
  );
}

export default App;
