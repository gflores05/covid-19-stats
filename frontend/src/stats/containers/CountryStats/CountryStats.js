import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { EditStats } from '../../components';

export const _CountryStats = (props) => {
  // useEffect(() => {
  //   props.loadContinents();
  // }, []);
  const stats = {
    _id: '6052fc554b1273598e3b34ea',
    continent: 'Asia',
    country: 'China',
    population: 1439323776,
    cases: {
      new: '+6',
      active: 169,
      critical: null,
      recovered: 85267,
      '1M_pop': '63',
      total: 90072
    },
    deaths: {
      new: null,
      '1M_pop': '3',
      total: 4636
    },
    tests: {
      '1M_pop': '111163',
      total: 160000000
    },
    day: '2021-03-18',
    time: '2021-03-18T07:00:23+00:00'
  };

  return (
    <EditStats stats={stats} onSave={(data) => console.log(data)}></EditStats>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const CountryStats = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CountryStats);
