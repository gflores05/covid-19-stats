import { createSelector } from 'reselect';

const selectStats = (state) => state.stats;

export const selectStatsList = createSelector(
  selectStats,
  (stats) => stats.list
);

export const selectIsStatsLoading = createSelector(
  selectStats,
  (stats) => stats.loading
);

export const selectIsSyncing = createSelector(
  selectStats,
  (stats) => stats.syncing
);

export const selectSelected = createSelector(
  selectStats,
  (stats) => stats.selected
);
