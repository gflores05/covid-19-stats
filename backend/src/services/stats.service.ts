import { Stats } from '@covid19/models';
import { Page } from '@covid19/types';

export class StatsService {
  private constructor() {}

  static singleton: StatsService;

  static get instance() {
    StatsService.singleton = StatsService.singleton || new StatsService();
    return StatsService.singleton;
  }

  async create(stats: Stats): Promise<string> {
    // TODO: insert stats in database
    return 'id';
  }
  async update(stats: Stats) {
    // TODO: update stats in database
  }
  async findById(id: string): Promise<Stats> {
    // TODO: find in database by id
    return {} as Stats;
  }
  async findByCountry(country: string): Promise<Stats> {
    // TODO: find in database by country
    return {} as Stats;
  }
  async list(page: Page): Promise<Stats[]> {
    // TODO: return a list of stats
    return [];
  }
}
