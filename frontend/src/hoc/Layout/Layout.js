import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => {
  return <Container fluid>{props.children}</Container>;
};
