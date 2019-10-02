import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const uiReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = action.entities.pokemon;
      return Object.assign({}, state, newState);
    case RECEIVE_SINGLE_POKEMON:
      newState = action.payload;
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default uiReducer;