import * as actionList from './actionList';
import fetch from 'react-native-fetch-polyfill';

export const setGetBeer = function (beer) {
  return {
    type: actionList.SET_GET_BEER,
    payload: beer
  };
};

export const isFetching = function () {
  return {
    type: actionList.IS_FETCHING
  };
};

export const networkError = function (err) {
    return {
        type: actionList.NETWORK_ERROR,
        payload: err
    }
}

export const getRandomBeer = function () {
  return (dispatch) => {
    dispatch(isFetching());
    fetch('https://api.punkapi.com/v2/beers/random', {timeout: 10 * 1000})
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => dispatch(setGetBeer(resp)))
    .catch((err) => dispatch(networkError(err)));
  };
};
