import { Service, Inject } from 'typedi';
import axios from 'axios';

import { Stats } from '@covid19/models';
import { Page } from '@covid19/types';
import { IStatsService } from '@covid19/domain';
import { IRepository } from '@covid19/domain/repository';

@Service('stats.service')
export class StatsService implements IStatsService {
  constructor(
    @Inject('stats.repository') private repository: IRepository<Stats>,
    @Inject('datasource.url') private sourceEndpoint: string,
    @Inject('datasource.apikey') private sourceApiKey: string
  ) {}

  async create(stats: Stats): Promise<string> {
    const result = await this.repository.upsert(stats, {
      continent: stats.continent,
      country: stats.country
    });

    return result._id;
  }

  async update(country: string, stats: Stats) {
    const result = await this.repository.upsert(stats, {
      country
    });

    return result;
  }

  async findById(id: string): Promise<Stats> {
    const result = await this.repository.findOne({
      _id: id
    });

    return result;
  }

  async findByCountry(country: string): Promise<Stats> {
    const result = await this.repository.findOne({
      country: country
    });

    return result;
  }

  async list(page: Page): Promise<Stats[]> {
    const result = await this.repository.find({}, page);

    return result;
  }

  async syncData(): Promise<number> {
    const response = await axios.get(this.sourceEndpoint, {
      headers: { 'X-RapidAPI-Key': this.sourceApiKey }
    });

    const data = response.data['response'] as Stats[];

    await this.repository.deleteMany({});

    const maxPerPage = 50;
    let i = 0;
    let inserteds = 0;

    while (i < data.length) {
      const docs = data.slice(i, i + maxPerPage);
      const result = await this.repository.insertMany(docs);

      inserteds += result;
      i += maxPerPage;
    }

    return inserteds;
  }
}
