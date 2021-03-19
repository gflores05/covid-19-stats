import React from 'react';
import { Row, Col, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { EditForm } from '../EditForm/EditForm';

export const EditStats = (props) => {
  return (
    <Row className="justify-content-lg-center mt-4">
      <Col xs="12" lg="8">
        <Row>
          <Col xs="12" md="8">
            <h2>Edit Stats for {props.stats?.country}</h2>
          </Col>
          <Col xs="12" md="4">
            <Link to="/stats" className="btn btn-primary">
              See All
            </Link>
          </Col>
        </Row>
      </Col>
      <Col xs="12" lg="8">
        {props.error && <Alert variant="danger">{props.error}</Alert>}
        {props.loadingData ? (
          <Spinner animation="border" />
        ) : (
          <EditForm
            stats={props.stats}
            onSave={(data) =>
              props.onSave({ ...data, country: props.stats.country })
            }
          ></EditForm>
        )}
      </Col>
    </Row>
  );
};
