import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectSinglePokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, props) => {
  let pokemonId = props.match.params.pokemonId;
  debugger;
  return {pokemon: selectSinglePokemon(state, pokemonId)};
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: pokemonId => dispatch(requestSinglePokemon(pokemonId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);