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

export const syncStats = () => {
  return {
    type: actionTypes.SYNC_STATS
  };
};

export const syncStatsSuccess = () => {
  return {
    type: actionTypes.SYNC_STATS_SUCCESS
  };
};

export const syncStatsFail = (error) => {
  return {
    type: actionTypes.SYNC_STATS_FAIL,
    error
  };
};
