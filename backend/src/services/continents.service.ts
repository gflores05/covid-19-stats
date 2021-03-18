import { Service, Inject } from 'typedi';
import { FilterQuery } from 'mongodb';
import { groupBy } from 'lodash';

import { Continent } from '@covid19/models';
import { Page } from '@covid19/types';
import { IContinentService } from '@covid19/domain';
import { IRepository } from '@covid19/domain/repository';

@Service('continents.service')
export class ContinentsService implements IContinentService {
  constructor(
    @Inject('continents.repository') private repository: IRepository<Continent>
  ) {}

  async list(query: FilterQuery<Continent>, page?: Page): Promise<Continent[]> {
    const result = await this.repository.find(query, page);

    return result;
  }

  async syncData(data): Promise<number> {
    const continents = Object.keys(
      groupBy(data, 'continent')
    ).map((continent) => ({ _id: null, name: continent }));

    const result = await this.repository.insertMany(continents);

    return result;
  }
}
