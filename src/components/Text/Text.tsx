import {StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import {useDarkMode} from '../../hooks';
import {PropsText} from './interface';

const Title: React.FC<PropsText> = ({title}) => {
  const {isDarkMode} = useDarkMode();
  return (
    <Text
      style={[
        styles.sectionTitle,
        {color: isDarkMode ? Colors.white : Colors.black},
      ]}>
      {title}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
