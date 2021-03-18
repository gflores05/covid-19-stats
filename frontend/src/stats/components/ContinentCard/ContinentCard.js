import React from 'react';
import { Card, Button, Accordion } from 'react-bootstrap';

import { StatsTable } from '../StatsTable/StatsTable';

export const ContinentCard = ({ continent, stats, onLoadContinent }) => {
  const countriesTables = stats.map((stats, i) => (
    <StatsTable key={i} stats={stats}></StatsTable>
  ));

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={continent}
          onClick={() => onLoadContinent(continent)}
        >
          {continent}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={continent}>
        <Card.Body>{countriesTables}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
