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
    const groupedData = groupBy(data, 'continent');
    const continents = Object.keys(groupedData).map((continent) => {
      return {
        _id: null,
        name: continent,
        countries: groupedData[continent].map((stat) => stat.country)
      };
    });

    await this.repository.deleteMany({});

    const result = await this.repository.insertMany(continents);

    return result;
  }
}
