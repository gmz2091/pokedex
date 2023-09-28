import React from 'react';
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
import {usePokemon} from '../../hooks';
import {styles} from './styled';

interface Props
  extends NativeStackScreenProps<StackNavigatorProps, 'DetailPokemon'> {}

const DetailPokemon: React.FC<Props> = ({navigation, route}) => {
  const {pokemon, color} = route.params;
  const {pokemonDetails, loading} = usePokemon(pokemon.id);

  return (
    <SafeView>
      <Button
        color="#7E7D7D"
        rounded
        width="50px"
        height="50px"
        absolute
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-ios-new" size={25} />
      </Button>
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
