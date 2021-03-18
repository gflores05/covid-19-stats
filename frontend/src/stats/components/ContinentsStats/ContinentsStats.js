import React from 'react';
import { groupBy } from 'lodash';
import { Accordion } from 'react-bootstrap';

import { ContinentCard } from '../ContinentCard/ContinentCard';

export const ContinentsStats = (props) => {
  const groupedData = groupBy(props.stats, 'continent');

  const cards = props.continents.map((continent, i) => {
    return (
      <ContinentCard
        continent={continent}
        stats={groupedData[continent]}
        onLoadContinent={(cont) => props.onLoadContinent(cont)}
        key={i}
      ></ContinentCard>
    );
  });

  return (
    <>
      <h1>Covid 19 Statistics</h1>
      <Accordion>{cards}</Accordion>
    </>
  );
};
