import { combineReducers } from 'redux';
import { isFetching, randomBeer } from './beerReducer';

export const allReducers = combineReducers({
  randomBeer,
  isFetching
});
