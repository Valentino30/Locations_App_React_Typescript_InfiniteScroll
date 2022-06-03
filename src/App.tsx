import List from "./components/List";
import Text from "./components/Text";
import Button from "./components/Button";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Container from "./components/Container";

import { useLocation } from "./hooks/location";
import { FELocationType } from "./types/location";

function App() {
  const { getLocations, locations } = useLocation();
  console.log({ locations });

  return (
    <Container>
      <Header>Locations Lister</Header>
      <Button onClick={getLocations}>Get Locations</Button>
      {locations ? (
        <List>
          {locations.map(
            ({ id, name, type, details, address }: FELocationType) => (
              <ListItem key={id}>
                <Text>{name}</Text>
                <Text>{`Details: ${details}`}</Text>
                <Text>{`Type: ${type}`}</Text>
                <Text>
                  {`${address.street}, ${address.zip} ${address.city}, ${address.state}.`}
                </Text>
              </ListItem>
            )
          )}
        </List>
      ) : (
        <Text>Getting locations ...</Text>
      )}
    </Container>
  );
}

export default App;
