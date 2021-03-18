import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { find } from 'lodash';

export const Search = ({ continents, onSearch }) => {
  const [countries, setCountries] = useState(['All']);

  const continentsOptions = [
    { name: 'All', countries: ['All'] },
    ...continents
  ].map((continent, i) => (
    <option value={continent.name} key={i}>
      {continent.name}
    </option>
  ));

  const countriesOptions = countries.map((country, i) => (
    <option value={country} key={i}>
      {country}
    </option>
  ));

  const onSelectContinent = (event) => {
    const selected = event.target.value;

    setCountries(['All', ...find(continents, { name: selected }).countries]);
    onSearch(selected, 'All');
  };

  return (
    <Row>
      <Col xs="12" md="6">
        <label>Continents</label>
        <select className="form-select" onChange={onSelectContinent}>
          {continentsOptions}
        </select>
      </Col>
      <Col xs="12" md="6">
        <label>Countries</label>
        <select className="form-select">{countriesOptions}</select>
      </Col>
    </Row>
  );
};
