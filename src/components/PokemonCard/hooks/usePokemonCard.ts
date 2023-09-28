import {useEffect, useState} from 'react';
import ImageColors from 'react-native-image-colors';
import {Pokemon} from '../../../interface';

export const usePokemonCard = (pokemon: Pokemon) => {
  const [backColor, setBackColor] = useState('gray');

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
    backColor,
  };
};
