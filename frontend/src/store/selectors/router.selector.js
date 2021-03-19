import { createSelector } from 'reselect';

const selectParams = (props) => props.match.params;

export const selectParamsCountry = createSelector(
  selectParams,
  (params) => params.country
);
