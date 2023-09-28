import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FlatListComponent,
  PokemonCard,
  SafeView,
  Text,
  ViewStack,
  Button,
} from '../../components';
import {usePokedex} from '../../hooks';

const Pokedex = ({navigation}: any) => {
  const {pokedex} = usePokedex();

  return (
    <SafeView>
      <ViewStack>
        <ViewStack center direction="row" justifyContent="space-between">
          <Button
            color="#7E7D7D"
            absolute
            rounded
            width="50px"
            height="50px"
            right={0}
            onPress={() => navigation.goBack()}>
            <Icon name="add" size={25} />
          </Button>
          <Text title="Pokedex" />
        </ViewStack>
        {pokedex.length === 0 && (
          <Text fontSize={15} title="No hay pokemones" />
        )}
        {pokedex.length > 0 && (
          <FlatListComponent
            data={pokedex}
            keyExtractor={pokemon => pokemon.id.toString()}
            renderItem={({item}) => (
              <PokemonCard navigation={navigation} pokemon={item} />
            )}
            numColumns={2}
          />
        )}
      </ViewStack>
    </SafeView>
  );
};

export default Pokedex;
