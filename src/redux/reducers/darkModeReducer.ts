import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface DarkModeState {
  isDarkMode: string;
}

const initialState: DarkModeState = {
  isDarkMode: 'dark',
};

const darkMode = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<string>) => {
      state.isDarkMode = action.payload;
      AsyncStorage.setItem('@darkMode', action.payload);
    },
  },
});

export const {setDarkMode} = darkMode.actions;

export default darkMode.reducer;
