import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {useDarkMode} from '../../hooks';
import {PropsSafeView} from './interface';

const SafeView: React.FC<PropsSafeView> = ({children}) => {
  const {backgroundStyle} = useDarkMode();
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <View style={styles.sectionContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default SafeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    padding: 25,
  },
});
