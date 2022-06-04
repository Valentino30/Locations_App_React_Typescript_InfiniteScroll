import { useEffect } from "react";

import List from "./components/List";
import Text from "./components/Text";
import Button from "./components/Button";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Container from "./components/Container";

import { useLocation } from "./hooks/location";
import { FELocationType } from "./types/location";

function App() {
  const { getLocations, getPaginatedLocations, locations, loading } =
    useLocation();

  useEffect(() => {
    getPaginatedLocations(0, 3);
  }, [getPaginatedLocations]);

  return (
    <Container>
      <Header as="h1">Locations Lister</Header>
      <Button onClick={getLocations}>Get Locations</Button>
      {loading && <Text>Getting locations ...</Text>}
      {locations.length !== 0 && (
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
      )}
    </Container>
  );
}

export default App;
