import React from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import styled from 'styled-components';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

// const RestaurantListContainer = styled.View`
//   flex: 1;
//   padding: ${({ theme }) => theme.space[3]};
// `;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
    {/* <RestaurantInfoCard /> */}
  </SafeArea>
);
