import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ViewStack} from '..';

const Loader: React.FC = () => {
  return (
    <ViewStack center>
      <LottieView
        style={styles.containerLoader}
        source={require('../../assets/animations/animation.json')}
        autoPlay
        loop
      />
    </ViewStack>
  );
};

export default Loader;

const styles = StyleSheet.create({
  containerLoader: {
    width: 100,
    height: 100,
    fontSize: 50,
  },
});
