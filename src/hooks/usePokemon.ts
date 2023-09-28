import {useState, useEffect} from 'react';
import {PokemonDetails} from '../interface';
import {api, config} from '../api';

export const usePokemon = (id: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>(
    {} as PokemonDetails,
  );
  const getDetails = async () => {
    const res = await api.get<PokemonDetails>(
      `${config.api.baseUrl}/pokemon/${id}`,
    );
    try {
      setPokemonDetails(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return {pokemonDetails, loading};
};
