import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Spinner } from 'react-bootstrap';

export const EditForm = (props) => {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    reset(props.stats);
  }, [reset, props]);

  return (
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
      <Form.Group controlId="cases.critical">
        <Form.Label>Critical</Form.Label>
        <Form.Control
          type="number"
          step="1"
          min="0"
          placeholder="critical"
          name="cases.critical"
          ref={register({ min: 0, valueAsNumber: true })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.cases?.critical?.type}
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
  );
};
