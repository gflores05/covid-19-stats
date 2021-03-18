import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';

import * as actions from './store/actions';
import * as selectors from './store/selectors';

import { Stats } from './stats';
import { Login, Signup } from './auth';
import { Layout, AuthLayout } from './hoc';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  useEffect(() => {
    props.verifyLogin();
  }, []);

  if (props.isLoggedIn) {
    return (
      <Layout onLogout={props.logout} username={props.username}>
        <Switch>
          <Route path="/" exact component={Stats}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Layout>
    );
  } else {
    return (
      <AuthLayout>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Redirect path="/" to="/login"></Redirect>
        </Switch>
      </AuthLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: selectors.selectIsLoggedIn(state),
    username: selectors.selectUsername(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyLogin: () => dispatch(actions.verifyLogin()),
    logout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
