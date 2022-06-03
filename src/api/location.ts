import { api } from ".";
import { LocationType } from "../types/location";

export const getLocationsRequest = async () => {
  const {
    data: { locations },
  } = await api.post("/locations", {
    start: 0,
    limit: 10,
  });

  return locations.map(
    ({
      locationId,
      locationName,
      locationDetails,
      locationType,
      address,
    }: LocationType) => ({
      locationId,
      locationName,
      locationDetails,
      locationType,
      address,
    })
  );
};
