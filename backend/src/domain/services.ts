import { FilterQuery } from 'mongodb';

import { Continent, Stats, User } from '@covid19/models';
import { Auth, Login, Page } from '@covid19/types';

export interface IStatsService {
  create(stats: Stats): Promise<string>;
  update(country: string, stats: Stats): Promise<Stats>;
  findById(id: string): Promise<Stats>;
  findByCountry(country: string): Promise<Stats>;
  list(query: FilterQuery<Stats>, page?: Page): Promise<Stats[]>;
  syncData(): Promise<number>;
}

export interface IContinentService {
  list(query: FilterQuery<Continent>, page?: Page): Promise<Continent[]>;
  syncData(data): Promise<number>;
}

export interface IAuthService {
  register(user: User): Promise<Auth>;
  login(user: Login): Promise<Auth>;
  refreshToken(auth: Auth): Promise<Auth>;
  verify(auth: Auth): Promise<Auth>;
  getByUsername(username: string): Promise<User>;
}
