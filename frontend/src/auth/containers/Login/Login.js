import React, { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { LoginForm } from '../../components';

export const Login = () => {
  const [redirect, setRedirect] = useState('');

  if (redirect) {
    return <Redirect to={redirect}></Redirect>;
  }

  return (
    <LoginForm
      onSignup={() => setRedirect('/signup')}
      onLogin={(data) => console.log(data)}
    ></LoginForm>
  );
};
