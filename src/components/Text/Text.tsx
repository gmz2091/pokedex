import {StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import {useDarkMode} from '../../hooks';
import {PropsText} from './interface';

const Title: React.FC<PropsText> = ({
  title,
  fontSize,
  fontWeight,
  opacity,
  color,
}) => {
  const {isDarkMode} = useDarkMode();

  const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: fontSize || 24,
      fontWeight: fontWeight || '600',
      opacity: opacity || 1,
      color: color || (isDarkMode ? Colors.white : Colors.black),
    },
  });

  return <Text style={[styles.sectionTitle]}>{title}</Text>;
};

export default Title;
