import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

export default class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    
    let pokemon = this.props.pokemon;
    const pokemonItems = pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
      ));
      
      return (
      <section className='pokedex'>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul>{ pokemonItems }</ul>
      </section>
    )
  }
}