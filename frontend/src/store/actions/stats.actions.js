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

export const selectStats = (country) => {
  return {
    type: actionTypes.SELECT_STATS,
    loading: true,
    country
  };
};

export const selectStatsSuccess = (selected) => {
  return {
    type: actionTypes.SELECT_STATS_SUCCESS,
    selected,
    loading: false
  };
};

export const selectStatsFail = (error) => {
  return {
    type: actionTypes.SELECT_STATS_FAIL,
    error,
    loading: false
  };
};

export const saveStats = (stats) => {
  return {
    type: actionTypes.SAVE_STATS,
    stats
  };
};

export const saveStatsSuccess = () => {
  return {
    type: actionTypes.SAVE_STATS_SUCCESS,
    loading: false
  };
};

export const saveStatsFail = (error) => {
  return {
    type: actionTypes.SAVE_STATS_FAIL,
    error,
    loading: false
  };
};
