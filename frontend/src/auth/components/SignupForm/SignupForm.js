import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Jumbotron, Row, Col } from 'react-bootstrap';

export const SignupForm = (props) => {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  return (
    <Row className="justify-content-lg-center">
      <Col xs="12" lg="8">
        <Jumbotron>
          <h1>Signup</h1>
          <Form onSubmit={handleSubmit(props.onSignup)} validated={validated}>
            <Form.Group controlId="username">
              <Form.Label>User</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                required
                ref={register({ required: true, maxLength: 80 })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username?.type}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*******"
                name="password"
                required
                ref={register({ required: true, maxLength: 80 })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.type}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="confPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*******"
                name="confPassword"
                required
                ref={register({ required: true, maxLength: 80 })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confPassword?.type}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              onClick={() => setValidated(true)}
              variant="primary"
              type="submit"
            >
              Signup
            </Button>
            <Button variant="accent" type="button" onClick={props.onLogin}>
              Login
            </Button>
          </Form>
        </Jumbotron>
      </Col>
    </Row>
  );
};
