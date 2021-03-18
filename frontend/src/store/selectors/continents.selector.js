import { createSelector } from 'reselect';

const selectContinents = (state) => state.continents;

export const selectContinentsList = createSelector(
  selectContinents,
  (continents) => continents.list.map((item) => item.name)
);
