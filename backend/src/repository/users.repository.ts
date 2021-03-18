import { Service, Inject } from 'typedi';

import { User } from '@covid19/models';
import { Repository } from './repository';

@Service('users.repository')
export class UserRepository extends Repository<User> {
  constructor(
    @Inject('database.uri') databseUri: string,
    @Inject('database.name') databaseName: string
  ) {
    super(databseUri, databaseName, 'users');
  }
}
