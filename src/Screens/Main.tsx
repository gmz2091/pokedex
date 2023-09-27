import {StatusBar} from 'react-native';
import React from 'react';
import {useDarkMode} from '../hooks';
import StackNavigator from '../navigation/StackNavigator';

const Main = () => {
  const {isDarkMode} = useDarkMode();

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StackNavigator />
    </>
  );
};

export default Main;
