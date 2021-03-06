export type BELocationType = {
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

export type FELocationType = {
  id: string;
  name: string;
  details: string;
  type: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
};

export type LocationContextType = {
  getPaginatedLocations: (start: number, limit: number) => void;
  locations: FELocationType[] | [];
  getLocations: () => void;
  totalLocations: number;
  loading: boolean;
};
