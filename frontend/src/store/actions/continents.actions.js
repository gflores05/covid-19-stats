import * as actionTypes from './actionTypes';

export const loadContinents = () => {
  return {
    type: actionTypes.LOAD_CONTINENTS
  };
};

export const loadContinentsSuccess = (list) => {
  return {
    type: actionTypes.LOAD_CONTINENTS_SUCCESS,
    list
  };
};

export const loadContinentsFail = (error) => {
  return {
    type: actionTypes.LOAD_CONTINENTS_FAIL,
    error
  };
};
