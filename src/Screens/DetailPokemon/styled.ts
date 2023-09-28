import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  headerContainerCircleMiddle: {
    width: width * 1.5,
    height: height * 0.5,
    borderBottomEndRadius: width,
    borderBottomStartRadius: width,
    position: 'absolute',
    top: -height * 0.15,
    zIndex: -1,
  },
  pokemonImage: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: -10,
  },
  cardContent: {
    marginTop: height * 0.4,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerImg: {
    width: 220,
    height: 220,
    overflow: 'hidden',
    position: 'absolute',
    top: 190,
    left: width * 0.5 - 120,
  },
  pokeball: {
    width: 220,
    height: 220,
    position: 'absolute',
    opacity: 0.2,
    transform: [{rotate: '45deg'}],
  },
  pokeLogo: {
    width: width,
    height: 220,
    position: 'absolute',
    top: 50,
    opacity: 0.1,
  },
});
