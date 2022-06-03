import { useEffect } from "react";
import { useLocation } from "./hooks/location";

function App() {
  const { getLocations, locations } = useLocation();
  console.log({ locations });

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  return (
    <div>
      <h1>Locations Lister</h1>
    </div>
  );
}

export default App;
