import * as actionTypes from './actionTypes';

export const loadStats = (continent, country) => {
  return {
    type: actionTypes.LOAD_STATS,
    loading: true,
    continent,
    country
  };
};

export const loadStatsSuccess = (list) => {
  return {
    type: actionTypes.LOAD_STATS_SUCCESS,
    loading: false,
    list
  };
};

export const loadStatsFail = (error) => {
  return {
    type: actionTypes.LOAD_STATS_FAIL,
    loading: false,
    error
  };
};
