import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Pokemon} from '../../interface';

interface PokemonState {
  pokedex: Pokemon[];
  isExist: boolean;
}

const initialState: PokemonState = {
  pokedex: [],
  isExist: false,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokedex: (state, action: PayloadAction<Pokemon>) => {
      const {payload} = action;
      const isExist = state.pokedex.find(
        item => item.name.toLowerCase() === payload.name.toLowerCase(),
      );
      if (!isExist) {
        AsyncStorage.setItem(
          '@pokedex',
          JSON.stringify([...state.pokedex, payload]),
        );
        state.isExist = true;
      }
    },
    removePokedex: (state, action: PayloadAction<string>) => {
      const {payload} = action;
      state.pokedex = state.pokedex.filter(item => item.name !== payload);
      AsyncStorage.setItem('@pokedex', JSON.stringify(state.pokedex));
      state.isExist = false;
    },
    showPokedex: (state: PokemonState, action: PayloadAction<any>) => {
      const {payload} = action;
      state.pokedex = payload;
    },
    checkPokedex: (state, action: PayloadAction<boolean>) => {
      const {payload} = action;
      state.isExist = payload;
    },
  },
});

export const {addPokedex, removePokedex, showPokedex, checkPokedex} =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
