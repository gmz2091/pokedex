import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Pokemon} from '../../interface';
import {Text, ViewStack, Button} from '..';
import {usePokemonCard} from './hooks/usePokemonCard';
import {useUtils} from '../../hooks';

interface Props {
  navigation?: any;
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({navigation, pokemon}) => {
  const {backColor} = usePokemonCard(pokemon);
  const {width, height} = useUtils();

  const styles = StyleSheet.create({
    containerImg: {
      width: 80,
      height: 80,
      overflow: 'hidden',
      position: 'absolute',
      right: -10,
      bottom: pokemon.types && pokemon.moves ? -12 : -22,
    },
    pokeball: {
      width: 100,
      height: 100,
      right: -10,
      bottom: -10,
      opacity: 0.3,
    },
    pokemonImage: {
      width: 80,
      height: 80,
      position: 'absolute',
      right: -20,
      bottom: pokemon.types && pokemon.moves ? -10 : -20,
    },
  });

  return (
    <Button
      justifyContent="flex-start"
      width={width * 0.4}
      height={height * 0.1}
      color={backColor}
      onPress={() =>
        navigation.navigate('DetailPokemon', {
          pokemon,
          color: backColor,
        })
      }>
      <ViewStack center justifyContent="space-between" direction="row">
        <ViewStack>
          <Text bgColor={backColor} fontSize={15} title={pokemon.name} />
          {pokemon.types && (
            <Text
              bgColor={backColor}
              fontSize={10}
              title={pokemon.types.type.name}
            />
          )}
          {pokemon.moves &&
            pokemon.moves.map(move => (
              <Text bgColor={backColor} fontSize={10} title={move.move.name} />
            ))}
        </ViewStack>
        <View style={{...styles.containerImg}}>
          <Image
            source={require('../../assets/images/pokeball.png')}
            style={styles.pokeball}
          />
        </View>
        <Image
          style={styles.pokemonImage}
          source={{
            uri: pokemon.picture,
          }}
        />
      </ViewStack>
    </Button>
  );
};

export default PokemonCard;
