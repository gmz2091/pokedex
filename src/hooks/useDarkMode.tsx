import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setDarkMode} from '../redux/reducers/darkModeReducer';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hook';

export const useDarkMode = () => {
  const {isDarkMode: dark} = useAppSelector(state => state.darkMode);
  const isDarkMode = useColorScheme() === dark;
  const dispatch = useAppDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.white : Colors.black,
  };

  const toggleSwitchDark = () => {
    const darkMode = dark === 'dark' ? 'light' : 'dark';
    dispatch(setDarkMode(darkMode));
  };

  useEffect(() => {
    const darkMode = async () => {
      await AsyncStorage.getItem('@darkMode').then(value => {
        if (value !== null) {
          dispatch(setDarkMode(value));
          return;
        }
        dispatch(setDarkMode('light'));
      });
    };

    darkMode();
  }, [dark, dispatch]);

  return {isDarkMode, toggleSwitchDark, dark, backgroundStyle};
};
