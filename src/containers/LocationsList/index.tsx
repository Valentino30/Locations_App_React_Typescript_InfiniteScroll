import { useEffect } from "react";

import List from "../../components/List";
import Text from "../../components/Text";
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import InfiniteScroll from "../../components/InfiniteScroll";

import { useLocation } from "../../hooks/location";
import { FELocationType } from "../../types/location";

export default function LocationsList() {
  const { getPaginatedLocations, locations, totalLocations } = useLocation();

  useEffect(() => {
    getPaginatedLocations(0, 3);
  }, [getPaginatedLocations]);

  const loadMore = () => {
    getPaginatedLocations(locations.length, 3);
  };

  return (
    <InfiniteScroll
      items={locations}
      loadMoreItems={loadMore}
      totalNumberOfItems={totalLocations}
    >
      <List>
        {locations.map(
          ({ id, name, type, details, address }: FELocationType) => (
            <ListItem key={id}>
              <Header as="h3" capitalize>{name}</Header>
              <Text>{`Details: ${details}`}</Text>
              <Text>{`Type: ${type}`}</Text>
              <Text>
                {`${address.street}, ${address.zip} ${address.city}, ${address.state}.`}
              </Text>
            </ListItem>
          )
        )}
      </List>
    </InfiniteScroll>
  );
}
