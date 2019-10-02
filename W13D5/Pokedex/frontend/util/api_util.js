export function fetchAllPokemon() {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
}

export function fetchSinglePokemon(pokemonId) {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokemonId}`
  });
}