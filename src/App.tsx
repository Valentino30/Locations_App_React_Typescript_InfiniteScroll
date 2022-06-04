import Header from "./components/Header";
import Container from "./components/Container";

import LocationsList from "./containers/LocationsList";

function App() {
  return (
    <Container>
      <Header as="h1">Locations Lister</Header>
      <LocationsList />
    </Container>
  );
}

export default App;
