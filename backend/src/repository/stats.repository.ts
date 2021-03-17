import { Service, Inject } from 'typedi';

import { Stats } from '@covid19/models';
import { Repository } from './repository';

@Service('stats.repository')
export class StatsRepository extends Repository<Stats> {
  constructor(
    @Inject('database.uri') databseUri: string,
    @Inject('database.name') databaseName: string
  ) {
    super(databseUri, databaseName, 'statistics');
  }
}
