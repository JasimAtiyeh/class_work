import React from 'react';

export default class PokemonDetail extends React.Component {

  componentDidUpdate(prevProps) {
    let pokemonId = this.props.match.params.pokemonId;
    let prevPokemonId = prevProps.match.params.pokemonId;
    if (prevPokemonId !== pokemonId) {
      return this.props.requestSinglePokemon(pokemonId);
    }
  }

  componentDidMount() {
    let pokemonId = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(pokemonId);
  }

  render() {
    let pokemon = this.props.pokemon;
    // let pokemonItems = state.entities.items.map(item => {
    //   if (!pokemon.item_ids.includes(item)) {
    //     return state.entities.items.pop();
    //   }
    // });

    debugger;
    if (pokemon) {
    return (
      <ul>
        <img src={pokemon.image_url}/>
        <li>{pokemon.name}</li>
        <li>Type: {pokemon.poke_type}</li>
        <li>Attack: {pokemon.attack}</li>
        <li>Defense: {pokemon.defense}</li>
        {/* <li>Moves: {pokemon.moves}</li>
        <ul>Items:
          {pokemon.items.map(item =>
            <li>item.image_url</li>
          )}
        </ul> */}
      </ul>
    )} else {
      return null;
    }
  }
}