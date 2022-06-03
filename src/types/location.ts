export type LocationType = {
  locationId: string;
  locationName: string;
  locationDetails: string;
  locationType: string;
  address: {
    addressLine1: string;
    city: string;
    state: string;
    zip: string;
  };
};

export type LocationContextType = {
  locations: LocationType[] | [] | false;
  getLocations: () => void;
};
