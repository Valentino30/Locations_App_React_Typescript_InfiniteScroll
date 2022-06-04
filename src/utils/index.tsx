export const delay = (milliseconds: number) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, milliseconds);
  });
};

export const getFakePaginatedLocationsRequest = async (
  start: number,
  limit: number
) => {
  await delay(1500);

  const paginatedLocations = [...Array(start + limit).keys()]
    .filter((location) => ![...Array(start).keys()].includes(location))
    .map((locationId) => ({
      id: `${locationId}`,
      name: `Location ${locationId}`,
      details: `Details ${locationId}`,
      type: `Type ${locationId}`,
      address: {
        street: `Street ${locationId}`,
        zip: `Zip ${locationId}`,
        city: `City ${locationId}`,
        state: `State ${locationId}`,
      },
    }));

  const numberOfLocations = 100;

  return { paginatedLocations, numberOfLocations };
};
