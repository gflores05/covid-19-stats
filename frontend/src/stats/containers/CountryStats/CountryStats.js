import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { EditStats } from '../../components';

export const _CountryStats = (props) => {
  useEffect(() => {
    if (props.country) {
      props.selectStats(props.country);
    }
  }, []);

  return (
    <EditStats
      stats={props.selected}
      loadingData={!props.selected}
      loading={props.loading}
      onSave={props.save}
    ></EditStats>
  );
};

const mapStateToProps = (state, props) => {
  return {
    country: selectors.selectParamsCountry(props),
    selected: selectors.selectSelected(state),
    loading: selectors.selectIsStatsLoading(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectStats: (country) => dispatch(actions.selectStats(country)),
    save: (stats) => {
      dispatch(actions.saveStats(stats));
    }
  };
};

export const CountryStats = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CountryStats);
