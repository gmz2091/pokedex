import moment from 'moment';
import {useState} from 'react';
import {Dimensions, Alert} from 'react-native';

export const useUtils = () => {
  const now = moment(new Date()).format('YYYY-MM-DD');
  const [date, setDate] = useState(now);
  const {width, height} = Dimensions.get('window');
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const colorFont = (color: string) => {
    let r = parseInt(color.substr(1, 2), 16);
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);
    let yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  };

  const showAlert = (title: string, message: string) => {
    Alert.alert(title, message, [
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);
  };

  return {capitalize, width, height, colorFont, showAlert, date, setDate};
};
