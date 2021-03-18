import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { find } from 'lodash';

export const Search = ({ continents, onSearch }) => {
  const [search, setSearch] = useState({
    countries: ['*'],
    continent: '*'
  });

  const continentsOptions = [
    { name: '*', countries: ['*'] },
    ...continents
  ].map((continent, i) => (
    <option value={continent.name} key={i}>
      {continent.name}
    </option>
  ));

  const countriesOptions = search.countries.map((country, i) => (
    <option value={country} key={i}>
      {country}
    </option>
  ));

  const onSelectContinent = (event) => {
    const continent = event.target.value;

    setSearch({
      continent,
      countries: [
        '*',
        ...(find(continents, { name: continent }) || { countries: [] })
          .countries
      ]
    });
    onSearch(continent, '*');
  };

  const onSelectCountry = (event) => {
    const country = event.target.value;

    onSearch(search.continent, country);
  };

  return (
    <Row>
      <Col xs="12" md="6">
        <label>Continents</label>
        <select onChange={onSelectContinent}>{continentsOptions}</select>
      </Col>
      <Col xs="12" md="6">
        <label>Countries</label>
        <select onChange={onSelectCountry}>{countriesOptions}</select>
      </Col>
    </Row>
  );
};
