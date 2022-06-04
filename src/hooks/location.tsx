import {
  useState,
  ReactNode,
  useContext,
  useCallback,
  createContext,
} from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import {
  getLocationsRequest,
  getPaginatedLocationsRequest,
} from "../api/location";
import { LocationContextType, FELocationType } from "../types/location";

const defaultLocationContext = {
  getPaginatedLocations: (start: number, limit: number) => {},
  getLocations: () => {},
  totalLocations: 0,
  loading: false,
  locations: [],
};

const LocationContext = createContext<LocationContextType>(
  defaultLocationContext
);

export const useLocation = () => {
  return useContext(LocationContext);
};

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState<FELocationType[] | []>([]);
  const [totalLocations, setTotalLocations] = useState(0);

  const getLocations = useCallback(async () => {
    setLoading(true);
    setLocations([]);
    try {
      const locations = await getLocationsRequest();
      if (locations.length === 0) {
        toast.error("No locations found 🤔");
        setLocations([]);
        setLoading(false);
      } else {
        setLocations(locations);
        setLoading(false);
      }
    } catch (error) {
      error instanceof AxiosError &&
        console.log({ error: error?.response?.statusText });
      toast.error("Something went wrong 😬");
      setLoading(false);
      setLocations([]);
    }
  }, []);

  const getPaginatedLocations = useCallback(
    async (start: number, limit: number) => {
      setLoading(true);
      try {
        const { paginatedLocations, numberOfLocations } =
          await getPaginatedLocationsRequest(start, limit);
        if (paginatedLocations.length === 0) {
          toast.error("No locations found 🤔");
          setTotalLocations(0);
          setLoading(false);
          setLocations([]);
        } else {
          setLocations((prevLocations) => [
            ...prevLocations,
            ...paginatedLocations,
          ]);
          setTotalLocations(numberOfLocations);
          setLoading(false);
        }
      } catch (error) {
        error instanceof AxiosError &&
          console.log({ error: error?.response?.statusText });
        toast.error("Something went wrong 😬");
        setTotalLocations(0);
        setLoading(false);
        setLocations([]);
      }
    },
    []
  );

  return (
    <LocationContext.Provider
      value={{
        loading,
        locations,
        getLocations,
        totalLocations,
        getPaginatedLocations,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
