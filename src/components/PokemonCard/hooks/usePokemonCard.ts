import {Dimensions} from 'react-native';
import {useEffect, useState} from 'react';
import ImageColors from 'react-native-image-colors';
import {Pokemon} from '../../../interface';

export const usePokemonCard = (pokemon: Pokemon) => {
  const [backColor, setBackColor] = useState('gray');
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const {width, height} = Dimensions.get('window');

  const colorFont = (color: string) => {
    let r = parseInt(color.substr(1, 2), 16);
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);
    let yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  };

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {
      fallback: 'gray',
      key: `${pokemon.id}`,
    })
      .then(colors => {
        if (colors.platform === 'android') {
          setBackColor(colors.dominant || 'gray');
        } else if (colors.platform === 'ios') {
          setBackColor(colors.background || 'gray');
        } else {
          setBackColor('gray');
        }
      })
      .catch(() => {
        setBackColor('gray');
      });
  }, [pokemon]);

  return {
    capitalize,
    width,
    height,
    colorFont,
    backColor,
  };
};
