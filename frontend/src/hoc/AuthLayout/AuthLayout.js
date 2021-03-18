import React from 'react';
import { Container } from 'react-bootstrap';

export const AuthLayout = (props) => {
  return <Container fluid>{props.children}</Container>;
};
