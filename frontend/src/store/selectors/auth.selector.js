import { createSelector } from 'reselect';

const selectAuth = (state) => state.auth;

export const selectUsername = createSelector(
  selectAuth,
  (auth) => auth.auth?.username
);

export const selectIsAuthLoading = createSelector(
  selectAuth,
  (auth) => auth.loading
);
