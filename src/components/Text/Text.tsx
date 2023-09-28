import {StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import {useDarkMode, useUtils} from '../../hooks';
import {PropsText} from './interface';

const Title: React.FC<PropsText> = ({
  title,
  fontSize,
  fontWeight,
  opacity,
  color,
  bgColor,
}) => {
  const {isDarkMode} = useDarkMode();
  const {capitalize, colorFont} = useUtils();

  const textColor = () => {
    if (bgColor) {
      return colorFont(bgColor);
    } else if (color) {
      return color;
    } else {
      return isDarkMode ? Colors.white : Colors.black;
    }
  };

  const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: fontSize || 24,
      fontWeight: fontWeight || '600',
      opacity: opacity || 1,
      color: textColor(),
    },
  });

  return <Text style={[styles.sectionTitle]}>{capitalize(title)}</Text>;
};

export default Title;
