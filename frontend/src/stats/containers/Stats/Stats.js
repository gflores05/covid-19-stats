import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { ContinentsStats } from '../../components';

export const _Stats = (props) => {
  useEffect(() => {
    props.loadContinents();
  }, []);

  return (
    <ContinentsStats
      stats={props.stats}
      continents={props.continents}
      statsLoading={props.statsLoading}
      syncing={props.syncing}
      continentsLoading={props.continentsLoading}
      onLoadContinent={props.loadStats}
      onSync={props.syncStats}
    ></ContinentsStats>
  );
};

const mapStateToProps = (state) => {
  return {
    continents: selectors.selectContinentsList(state),
    continentsLoading: selectors.selectIsContinentsLoading(state),
    stats: selectors.selectStatsList(state),
    statsLoading: selectors.selectIsStatsLoading(state),
    syncing: selectors.selectIsSyncing(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadContinents: () => dispatch(actions.loadContinents()),
    loadStats: (continent, country) =>
      dispatch(actions.loadStats(continent, country)),
    syncStats: () => dispatch(actions.syncStats())
  };
};

export const Stats = connect(mapStateToProps, mapDispatchToProps)(_Stats);
