import React from 'react';

import { ContinentsStats } from '../../components';

export const Stats = () => {
  return (
    <ContinentsStats
      stats={[]}
      continents={[]}
      onLoadContinent={(continent) => {
        console.log(continent);
      }}
    ></ContinentsStats>
  );
};
