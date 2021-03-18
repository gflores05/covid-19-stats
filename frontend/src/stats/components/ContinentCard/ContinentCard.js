import React from 'react';
import { Card, Button, Accordion, Spinner } from 'react-bootstrap';

import { StatsTable } from '../StatsTable/StatsTable';

export const ContinentCard = ({
  continent,
  stats,
  onLoadContinent,
  statsLoading
}) => {
  const countriesTables = (stats || []).map((stats, i) => (
    <StatsTable key={i} stats={stats}></StatsTable>
  ));

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={continent}
          onClick={onLoadContinent}
        >
          {continent}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={continent}>
        <Card.Body>
          {statsLoading ? <Spinner animation="border" /> : countriesTables}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
