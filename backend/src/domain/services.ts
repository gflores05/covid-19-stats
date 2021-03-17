import { Stats } from '@covid19/models';
import { Page } from '@covid19/types';

export interface IStatsService {
  create(stats: Stats): Promise<string>;
  update(country: string, stats: Stats): Promise<Stats>;
  findById(id: string): Promise<Stats>;
  findByCountry(country: string): Promise<Stats>;
  list(page: Page): Promise<Stats[]>;
  syncData(): Promise<number>;
}
