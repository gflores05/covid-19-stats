import * as actionTypes from './actionTypes';

export const loadContinents = () => {
  return {
    type: actionTypes.LOAD_CONTINENTS,
    loading: true
  };
};

export const loadContinentsSuccess = (list) => {
  return {
    type: actionTypes.LOAD_CONTINENTS_SUCCESS,
    loading: false,
    list
  };
};

export const loadContinentsFail = (error) => {
  return {
    type: actionTypes.LOAD_CONTINENTS_FAIL,
    loading: false,
    error
  };
};
