import { useLocation } from "./hooks/location";
import { FELocationType } from "./types/location";

function App() {
  const { getLocations, locations } = useLocation();
  console.log({ locations });

  return (
    <div>
      <h1>Locations Lister</h1>
      <button onClick={getLocations}>Get Locations</button>
      {locations ? (
        <ul>
          {locations.map(
            ({ id, name, type, details, address }: FELocationType) => (
              <li key={id}>
                <h3>{name}</h3>
                <p>Details: {details}</p>
                <p>Type: {type}</p>
                <p>
                  {address.street}, {address.zip} {address.city},{" "}
                  {address.state}.
                </p>
              </li>
            )
          )}
        </ul>
      ) : (
        <p>Getting locations ...</p>
      )}
    </div>
  );
}

export default App;
