import React from 'react';
import { Link } from 'react-router-dom';

const pokemonIndexItem = poke => {
  
  return (
    <li>
      <Link to={`/pokemon/${poke.pokemon.id}`}>
        {poke.pokemon.name}
      </Link>
      <img src={poke.pokemon.image_url} />
    </li>
  )
}

export default pokemonIndexItem