import {
  useState,
  ReactNode,
  useContext,
  useCallback,
  createContext,
} from "react";

import { LocationContextType, LocationType } from "../types/location";
import { getLocationsRequest } from "../api/location";

const defaultLocationContext = {
  getLocations: () => {},
  locations: [],
};

const LocationContext = createContext<LocationContextType>(
  defaultLocationContext
);

export const useLocation = () => {
  return useContext(LocationContext);
};

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [locations, setLocations] = useState<LocationType[] | [] | false>([]);

  const getLocations = useCallback(async () => {
    setLocations(false);
    try {
      const locations = await getLocationsRequest();
      if (locations.length === 0) {
        alert("No locations found 🤔");
        setLocations([]);
      } else {
        setLocations(locations);
      }
    } catch (error) {
      alert("Something went wrong 😬");
      setLocations([]);
    }
  }, []);

  return (
    <LocationContext.Provider value={{ getLocations, locations }}>
      {children}
    </LocationContext.Provider>
  );
};
