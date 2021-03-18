import React, { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { SignupForm } from '../../components';

export const Signup = () => {
  const [redirect, setRedirect] = useState('');

  if (redirect) {
    return <Redirect to={redirect}></Redirect>;
  }

  return (
    <SignupForm
      onLogin={() => setRedirect('/login')}
      onSignup={(data) => console.log(data)}
    ></SignupForm>
  );
};
