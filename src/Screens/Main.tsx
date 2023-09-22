import {StatusBar} from 'react-native';
import React from 'react';
import {useDarkMode} from '../hooks';
import {AppNavigator} from '../navigation';

const Main = () => {
  const {isDarkMode, backgroundStyle} = useDarkMode();

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator isDarkMode={isDarkMode} backgroundStyle={backgroundStyle} />
    </>
  );
};

export default Main;
