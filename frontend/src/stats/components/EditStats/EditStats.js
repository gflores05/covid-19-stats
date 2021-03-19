import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col, Alert, Spinner } from 'react-bootstrap';

export const EditStats = (props) => {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: props.stats
  });

  return (
    <Row className="justify-content-lg-center">
      <Col xs="12" md="8">
        <h2>Edit Stats for {props.stats.country}</h2>
      </Col>
      <Col xs="12" lg="8">
        {props.error && <Alert variant="danger">{props.error}</Alert>}
        <Form onSubmit={handleSubmit(props.onSave)} validated={validated}>
          <Form.Group controlId="population">
            <Form.Label>Population</Form.Label>
            <Form.Control
              type="number"
              step="1"
              min="0"
              placeholder="Population"
              name="population"
              required
              ref={register({ required: true, min: 0, valueAsNumber: true })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.population?.type}
            </Form.Control.Feedback>
          </Form.Group>
          <h3>Cases</h3>
          <Form.Group controlId="cases.new">
            <Form.Label>New</Form.Label>
            <Form.Control
              type="text"
              placeholder="new"
              name="cases.new"
              ref={register({ pattern: /[+-]?\d+/ })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cases?.new?.type}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="cases.active">
            <Form.Label>Active</Form.Label>
            <Form.Control
              type="number"
              step="1"
              min="0"
              placeholder="active"
              name="cases.active"
              ref={register({ min: 0, valueAsNumber: true })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cases?.active?.type}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="cases.recovered">
            <Form.Label>Recovered</Form.Label>
            <Form.Control
              type="number"
              step="1"
              min="0"
              placeholder="recovered"
              name="cases.recovered"
              ref={register({ min: 0, valueAsNumber: true })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cases?.recovered?.type}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="cases.1M_pop">
            <Form.Label>1M pop</Form.Label>
            <Form.Control
              type="text"
              placeholder="1M pop"
              name="cases.1M_pop"
              pattern="[+-]?\d+"
              ref={register({ pattern: /[+-]?\d+/ })}
            />
            <Form.Control.Feedback type="invalid">
              {(errors.cases || {})['1M_pop']?.type}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="cases.total">
            <Form.Label>Total</Form.Label>
            <Form.Control
              type="number"
              step="1"
              min="0"
              placeholder="total"
              name="cases.total"
              required
              ref={register({ required: true, min: 0, valueAsNumber: true })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cases?.total?.type}
            </Form.Control.Feedback>
          </Form.Group>
          <h3>Deaths</h3>
          <Form.Group controlId="deaths.new">
            <Form.Label>New</Form.Label>
            <Form.Control
              type="text"
              placeholder="new"
              name="deaths.new"
              ref={register({ pattern: /[+-]?\d+/ })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.deaths?.new?.type}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="deaths.1M_pop">
            <Form.Label>1M pop</Form.Label>
            <Form.Control
              type="text"
              placeholder="1M pop"
              name="deaths.1M_pop"
              pattern="[+-]?\d+"
              ref={register({ pattern: /[+-]?\d+/ })}
            />
            <Form.Control.Feedback type="invalid">
              {(errors.deaths || {})['1M_pop']?.type}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="deaths.total">
            <Form.Label>Total</Form.Label>
            <Form.Control
              type="number"
              step="1"
              min="0"
              placeholder="total"
              name="deaths.total"
              required
              ref={register({ required: true, min: 0, valueAsNumber: true })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.deaths?.total?.type}
            </Form.Control.Feedback>
          </Form.Group>
          <h3>Tests</h3>
          <Form.Group controlId="tests.1M_pop">
            <Form.Label>1M pop</Form.Label>
            <Form.Control
              type="text"
              placeholder="1M pop"
              name="tests.1M_pop"
              pattern="[+-]?\d+"
              ref={register({ pattern: /[+-]?\d+/ })}
            />
            <Form.Control.Feedback type="invalid">
              {(errors.tests || {})['1M_pop']?.type}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="tests.total">
            <Form.Label>Total</Form.Label>
            <Form.Control
              type="number"
              step="1"
              min="0"
              placeholder="total"
              name="tests.total"
              required
              ref={register({ required: true, min: 0, valueAsNumber: true })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.tests?.total?.type}
            </Form.Control.Feedback>
          </Form.Group>
          {props.loading ? (
            <Spinner animation="border" />
          ) : (
            <>
              <Button
                onClick={() => setValidated(true)}
                variant="primary"
                type="submit"
              >
                Save
              </Button>
            </>
          )}
        </Form>
      </Col>
    </Row>
  );
};