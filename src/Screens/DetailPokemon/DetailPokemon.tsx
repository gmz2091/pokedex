import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackNavigatorProps} from '../../navigation/StackNavigator';
import {
  Button,
  CardInfoPokemon,
  Loader,
  SafeView,
  Text,
  ViewStack,
} from '../../components';
import {usePokedex, usePokemon} from '../../hooks';
import {styles} from './styled';

interface Props
  extends NativeStackScreenProps<StackNavigatorProps, 'DetailPokemon'> {}

const DetailPokemon: React.FC<Props> = ({navigation, route}) => {
  const {pokemon, color} = route.params;
  const {pokemonDetails, loading} = usePokemon(pokemon.id);
  const {isExist, addPokemon, removePokemon, checkPokemon} = usePokedex();

  useEffect(() => {
    checkPokemon(pokemon.name);
  }, [pokemon.name]);

  return (
    <SafeView>
      <ViewStack justifyContent="space-between" direction="row">
        <Button
          color="#7E7D7D"
          rounded
          width="50px"
          height="50px"
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios-new" size={25} />
        </Button>
        {isExist && (
          <Button
            color="#7E7D7D"
            rounded
            width="50px"
            height="50px"
            right={25}
            onPress={() => removePokemon(pokemon.name)}>
            <Icon name="delete" size={25} />
          </Button>
        )}
        {!isExist && (
          <Button
            color="#7E7D7D"
            rounded
            width="50px"
            height="50px"
            right={25}
            onPress={() =>
              addPokemon({
                ...pokemon,
                types: pokemonDetails.types[0],
                moves: [
                  pokemonDetails.moves[0],
                  pokemonDetails.moves[pokemonDetails.moves.length - 1],
                ],
              })
            }>
            <Icon name="add" size={25} />
          </Button>
        )}
      </ViewStack>
      <ViewStack center>
        <Text bgColor={color} title={pokemon.name} />
      </ViewStack>
      <View
        style={{...styles.headerContainerCircleMiddle, backgroundColor: color}}>
        <View style={styles.containerImg}>
          <Image
            source={require('../../assets/images/pokeball.png')}
            style={styles.pokeball}
          />
        </View>
      </View>
      <ViewStack center>
        <Image source={{uri: pokemon.picture}} style={styles.pokemonImage} />
      </ViewStack>
      <View style={{...StyleSheet.absoluteFillObject, ...styles.cardContent}}>
        <Image
          source={require('../../assets/images/pokemon_logo.png')}
          style={styles.pokeLogo}
        />
        {loading ? (
          <Loader />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <CardInfoPokemon pokemonDetails={pokemonDetails} color={color} />
          </ScrollView>
        )}
      </View>
    </SafeView>
  );
};

export default DetailPokemon;
