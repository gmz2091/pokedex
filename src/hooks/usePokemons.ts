import {useEffect, useRef, useState} from 'react';
import {api, config} from '../api';
import {Pokemon, PokemonResUrl, PokemonsRes} from '../interface';

export const usePokemons = () => {
  const [loading, setloading] = useState(false);
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([]);
  const nextPageUrl = useRef<string>(`${config.api.baseUrl}/pokemon?limit=20`);

  const mapPokemon = (pokemonList: PokemonResUrl[]) => {
    const newPokemonList: Pokemon[] = pokemonList.map(({name, url}) => {
      const id = url.split('/')[6];
      const picture = `${config.api.imageBaseUrl}/${id}.png`;
      return {id, name, picture};
    });
    setPokemonsList([...pokemonsList, ...newPokemonList]);
    setloading(false);
  };

  const getPokemons = async () => {
    setloading(true);
    const response = await api.get<PokemonsRes>(nextPageUrl.current);
    try {
      nextPageUrl.current = response.data.next;
      mapPokemon(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return {loading, pokemonsList, getPokemons};
};
