import {PokemonDetails} from './pokemonDetails.interface';

export interface PokemonsRes {
  count: number;
  next: string;
  previous: null;
  results: PokemonResUrl[];
}

export interface PokemonResUrl {
  name: string;
  url: string;
}

export interface Pokemon extends Omit<PokemonDetails, 'sprites'> {
  id: number | string;
  name: string;
  picture?: string;
  color?: string;
}
