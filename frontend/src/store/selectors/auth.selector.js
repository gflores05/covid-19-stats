import { createSelector } from 'reselect';

const selectAuth = (state) => state.auth;

export const selectIsLoggedIn = createSelector(
  selectAuth,
  (auth) => auth.auth !== null
);

export const selectUsername = createSelector(
  selectAuth,
  (auth) => auth.auth?.username
);

export const selectIsAuthLoading = createSelector(
  selectAuth,
  (auth) => auth.loading
);

export const selectAuthError = createSelector(selectAuth, (auth) => auth.error);
