import React, { useState } from 'react';
import { groupBy } from 'lodash';
import { Accordion, Spinner, Row, Col } from 'react-bootstrap';

import { ContinentCard } from '../ContinentCard/ContinentCard';
import { Search } from '../Search/Search';

export const ContinentsStats = (props) => {
  const [cont, setCont] = useState({
    filter: '*',
    selected: null
  });

  const onSearch = (continent, country) => {
    setCont({
      selected: null,
      filter: continent
    });
    props.onLoadContinent(continent, country);
  };

  const onSelectContinent = (continent) => {
    setCont({
      ...cont,
      selected: continent
    });
    props.onLoadContinent(continent, '*');
  };

  const groupedData = groupBy(props.stats, 'continent');

  const cards = props.continents
    .filter(
      (continent) => cont.filter === '*' || continent.name === cont.filter
    )
    .map((continent, i) => {
      return (
        <ContinentCard
          continent={continent.name}
          stats={groupedData[continent.name]}
          statsLoading={props.statsLoading}
          onLoadContinent={() => onSelectContinent(continent.name)}
          key={i}
        ></ContinentCard>
      );
    });

  return (
    <>
      <h1>Covid 19 Statistics</h1>
      <Search continents={props.continents} onSearch={onSearch}></Search>
      <Row>
        <Col xs="12">
          {props.continentsLoading ? (
            <Spinner animation="border" />
          ) : (
            <Accordion
              activeKey={cont.filter === '*' ? cont.selected : cont.filter}
            >
              {cards}
            </Accordion>
          )}
        </Col>
      </Row>
    </>
  );
};
