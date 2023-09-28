import {Pokemons, Pokedex, Profile} from '../Screens';

export const routes = [
  {
    name: 'Pokmons',
    component: Pokemons,
    icon: 'home',
  },
  {
    name: 'Pokedex',
    component: Pokedex,
    icon: 'catching-pokemon',
  },
  {
    name: 'Profile',
    component: Profile,
    icon: 'person',
  },
];
