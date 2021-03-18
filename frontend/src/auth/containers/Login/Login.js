import React, { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { LoginForm } from '../../components';

export const _Login = (props) => {
  const [redirect, setRedirect] = useState('');

  if (redirect) {
    return <Redirect to={redirect}></Redirect>;
  }

  return (
    <LoginForm
      error={props.error}
      loading={props.loading}
      onSignup={() => setRedirect('/signup')}
      onLogin={props.login}
    ></LoginForm>
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
    login: (user) => dispatch(actions.login(user))
  };
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login);
