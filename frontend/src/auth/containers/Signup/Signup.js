import React, { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { SignupForm } from '../../components';

export const _Signup = (props) => {
  const [redirect, setRedirect] = useState('');

  if (redirect) {
    return <Redirect to={redirect}></Redirect>;
  }

  return (
    <SignupForm
      error={props.error}
      loading={props.loading}
      onLogin={() => setRedirect('/login')}
      onSignup={props.signup}
    ></SignupForm>
  );
};

const mapStateToProps = (state) => {
  return {
    error: selectors.selectAuthError(state),
    loading: selectors.selectIsAuthLoading(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(actions.signup(user))
  };
};

export const Signup = connect(mapStateToProps, mapDispatchToProps)(_Signup);
