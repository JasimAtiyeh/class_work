import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = () => (
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  )
);