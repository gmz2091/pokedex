import React from 'react';
import {PokemonDetails} from '../../interface';
import {InfoPokemon} from '..';

interface IProps {
  pokemonDetails: PokemonDetails;
  color: string;
}

const CardInfoPokemon: React.FC<IProps> = ({pokemonDetails, color}) => {
  return (
    <>
      <InfoPokemon data={pokemonDetails.types} title="type" color={color} />
      <InfoPokemon
        data={pokemonDetails.moves.slice(0, 5)}
        title="move"
        color={color}
      />
    </>
  );
};

export default CardInfoPokemon;
