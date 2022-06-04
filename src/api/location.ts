import { api } from ".";
import { BELocationType } from "../types/location";

export const getLocationsRequest = async () => {
  const {
    data: { locations },
  } = await api.post("/locations", {
    start: 0,
    limit: 3,
  });

  return locations.map(
    ({
      locationId,
      locationName,
      locationDetails,
      locationType,
      address,
    }: BELocationType) => ({
      id: locationId,
      name: locationName,
      details: locationDetails || "NA",
      type: locationType,
      address: {
        street: address.addressLine1,
        ...address,
      },
    })
  );
};

export const getPaginatedLocationsRequest = async (
  start: number,
  limit: number
) => {
  const {
    data: { locations, numberOfLocations },
  } = await api.post("/locations", {
    start,
    limit,
  });

  const paginatedLocations = locations.map(
    ({
      locationId,
      locationName,
      locationDetails,
      locationType,
      address,
    }: BELocationType) => ({
      id: locationId,
      name: locationName,
      details: locationDetails || "NA",
      type: locationType,
      address: {
        street: address.addressLine1,
        ...address,
      },
    })
  );

  return { paginatedLocations, numberOfLocations };
};
