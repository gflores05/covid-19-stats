export interface PropertyBase {
  '1M_pop'?: string;
  total: number;
}

export interface Cases extends PropertyBase {
  new?: string;
  active?: number;
  critical?: number;
  recovered?: number;
}

export interface Deaths extends PropertyBase {
  new?: string;
}

export interface Stats {
  _id: string;
  continent: string;
  country: string;
  population: number;
  cases: Cases;
  deaths: Deaths;
  tests: PropertyBase;
  day: Date;
  time: Date;
}
