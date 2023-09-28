import moment from 'moment';
import {useState} from 'react';
import {Dimensions, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const useUtils = () => {
  const now = moment(new Date()).format('YYYY-MM-DD');
  const [date, setDate] = useState(now);
  const {width, height} = Dimensions.get('window');
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  interface Options {
    title: string;
    onChoose: () => void;
  }

  const colorFont = (color: string) => {
    let r = parseInt(color.substr(1, 2), 16);
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);
    let yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  };

  const showAlert = (title: string, message: string, options?: Options[]) => {
    if (!options || options.length === 0) {
      Alert.alert(title, message, [{text: 'OK', onPress: () => {}}]);
    } else {
      Alert.alert(
        title,
        message,
        options.map(item => ({
          text: item.title,
          onPress: () => item.onChoose(),
        })),
      );
    }
  };

  const chooseImage = (modifyAccount: (image?: string) => void) => {
    const options = [
      {
        title: 'Camera',
        onChoose: async () =>
          launchCamera(
            {mediaType: 'photo', quality: 0.5, includeBase64: true},
            async res => {
              if (res.didCancel) {
                console.log('User cancelled image picker');
              } else if (res.errorCode) {
                console.log('ImagePicker Error: ', res.errorMessage);
              } else {
                const base64 = `data:image/jpeg;base64,${res.assets[0].base64}`;
                modifyAccount(base64);
              }
            },
          ),
      },
      {
        title: 'Gallery',
        onChoose: async () =>
          launchImageLibrary(
            {mediaType: 'photo', quality: 0.5, includeBase64: true},
            async res => {
              if (res.didCancel) {
                console.log('User cancelled image picker');
              } else if (res.errorCode) {
                console.log('ImagePicker Error: ', res.errorMessage);
              } else {
                const base64 = `data:image/jpeg;base64,${res.assets[0].base64}`;
                modifyAccount(base64);
              }
            },
          ),
      },
    ];
    showAlert('Choose Image', 'Choose Image from', options);
  };

  return {
    capitalize,
    width,
    height,
    colorFont,
    showAlert,
    date,
    setDate,
    chooseImage,
  };
};
