import { combineReducers } from 'redux';
import { isFetching, randomBeer } from './beerReducer';
import { error } from './errorReducer'

export const allReducers = combineReducers({
  randomBeer,
  isFetching,
  error
});
