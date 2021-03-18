import React from 'react';
import { Table } from 'react-bootstrap';

export const StatsTable = ({ stats }) => {
  const rows = [
    { label: 'New', prop: 'new' },
    { label: 'Active', prop: 'active' },
    { label: 'Critical', prop: 'critical' },
    { label: 'Recovered', prop: 'recovered' },
    { label: '1M Pop', prop: '1M_pop' },
    { label: 'Total', prop: 'total' }
  ].map((stat, i) => (
    <tr key={i}>
      <td>{stats.day}</td>
      <td>{stats.population}</td>
      <td>{stat.label}</td>
      <td>{stats.cases[stat.prop] || '-'}</td>
      <td>{stats.deaths[stat.prop] || '-'}</td>
      <td>{stats.tests[stat.prop] || '-'}</td>
    </tr>
  ));

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Country: {stats.country}</th>
        </tr>
        <tr>
          <th>Day</th>
          <th>Population</th>
          <th>Stat</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Tests</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
