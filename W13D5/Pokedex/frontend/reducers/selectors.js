export const selectAllPokemon = state => Object.values(state.entities.pokemon);
export const selectSinglePokemon = (state, pokemonId) => state.entities.pokemon[pokemonId];
