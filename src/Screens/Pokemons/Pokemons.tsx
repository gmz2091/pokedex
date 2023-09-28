import React from 'react';
import {
  FlatListComponent,
  PokemonCard,
  SafeView,
  Text,
  ViewStack,
} from '../../components';
import {usePokemons} from '../../hooks';

const Home: React.FC = ({navigation}: any) => {
  const {pokemonsList, getPokemons} = usePokemons();
  return (
    <SafeView>
      <Text title="Pokemons" />
      <ViewStack center>
        <FlatListComponent
          data={pokemonsList}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({item}) => (
            <PokemonCard navigation={navigation} pokemon={item} />
          )}
          onEndReached={getPokemons}
          numColumns={2}
        />
      </ViewStack>
    </SafeView>
  );
};
export default Home;
