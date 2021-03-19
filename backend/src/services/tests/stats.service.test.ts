import 'reflect-metadata';
import { Container } from 'typedi';
import axios from 'axios';

import { IStatsService } from '../../domain';
import { stats } from './fixtures';

Container.set('datasource.url', 'url');
Container.set('datasource.apikey', 'apikey');
Container.set('stats.repository', {
  deleteMany: async (query) => {},
  insertMany: async (docs) => docs.length
});
Container.set('continents.service', {
  syncData: async (data) => {}
});

import '../stats.service';

jest.mock('axios');

describe('stats services', () => {
  it('should sync data and return inserteds', async () => {
    const data = [];

    const response = {
      data: { response: stats }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(response));

    const service = Container.get<IStatsService>('stats.service');

    const result = await service.syncData();

    expect(result).toBe(stats.length);
  });
});
