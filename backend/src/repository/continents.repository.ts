import { Service, Inject } from 'typedi';

import { Continent } from '@covid19/models';
import { Repository } from './repository';

@Service('continents.repository')
export class ContinentRepository extends Repository<Continent> {
  constructor(
    @Inject('database.uri') databseUri: string,
    @Inject('database.name') databaseName: string
  ) {
    super(databseUri, databaseName, 'continents');
  }
}
