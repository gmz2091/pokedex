import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../redux';
import {
  addPokedex,
  removePokedex,
  showPokedex,
  checkPokedex,
} from '../redux/reducers/pokemonReducer';
import {Pokemon} from '../interface';
import {useUtils} from './useUtils';

export const usePokedex = () => {
  const {isExist, pokedex} = useAppSelector(state => state.pokemonReducer);
  const dispatch = useAppDispatch();
  const {showAlert} = useUtils();

  const addPokemon = (pokemon: Pokemon) => {
    dispatch(addPokedex(pokemon));
    showAlert('Pokemon added', 'Pokemon added to pokedex');
  };

  const removePokemon = (name: string) => {
    dispatch(removePokedex(name));
    showAlert('Pokemon removed', 'Pokemon removed from pokedex');
  };

  const checkPokemon = (name: string) => {
    const exist = pokedex.find(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );
    dispatch(checkPokedex(!!exist));
  };

  useEffect(() => {
    const pokex = async () => {
      const value = await AsyncStorage.getItem('@pokedex');
      const poke = JSON.parse(value!);
      if (value !== null) {
        dispatch(showPokedex(poke));
        return;
      }
    };
    pokex();
  }, [dispatch, isExist]);

  return {
    isExist,
    pokedex,
    addPokemon,
    removePokemon,
    checkPokemon,
  };
};
