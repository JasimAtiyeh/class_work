import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  entities: pokemon
});

export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);


export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  payload: pokemon
});

export const requestSinglePokemon = (pokemonId) => dispatch => (
  APIUtil.fetchSinglePokemon(pokemonId)
    .then(poke => dispatch(receiveSinglePokemon(poke)))
);