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

export interface Pokemon {
  id: string;
  name: string;
  picture: string;
  color?: string;
}
