import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER 
} from '../actions/session_actions';

const SessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = action.user.id;
      return Object.assign({}, oldState, newState);
    case LOGOUT_CURRENT_USER:
      newState = Object.assign({}, oldState);
      delete newState[action.user.Id];
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;