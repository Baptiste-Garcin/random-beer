import * as actionList from './actionList';

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

export const getRandomBeer = function () {
  return (dispatch) => {
    dispatch(isFetching());
    fetch('https://api.punkapi.com/v2/beers/random')
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => dispatch(setGetBeer(resp)))
    .catch((ex) => console.error(ex));
  };
};
