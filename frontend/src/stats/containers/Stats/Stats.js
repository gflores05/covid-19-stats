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
      stats={[]}
      continents={props.continents}
      onLoadContinent={(continent) => {
        console.log(continent);
      }}
    ></ContinentsStats>
  );
};

const mapStateToProps = (state, props) => {
  return {
    continents: selectors.selectContinentsList(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadContinents: () => dispatch(actions.loadContinents())
  };
};

export const Stats = connect(mapStateToProps, mapDispatchToProps)(_Stats);
