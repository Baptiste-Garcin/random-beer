import * as actionList from '../actions/actionList';

export function randomBeer (state = null, action) {
  switch (action.type) {
  case actionList.SET_GET_BEER:
    return action.payload[0];
  default:
    return state;
  }
}

export function isFetching (state = false, action) {
  switch (action.type) {
  case actionList.IS_FETCHING:
    return true;
  case actionList.SET_GET_BEER:
    return false;
  default:
    return state;
  }
}
