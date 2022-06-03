import {
  useState,
  ReactNode,
  useContext,
  useCallback,
  createContext,
} from "react";
import { AxiosError } from "axios";

import { getLocationsRequest } from "../api/location";
import { LocationContextType, FELocationType } from "../types/location";

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
  const [locations, setLocations] = useState<FELocationType[] | [] | false>([]);

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
      error instanceof AxiosError &&
        console.log({ error: error?.response?.statusText });
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
