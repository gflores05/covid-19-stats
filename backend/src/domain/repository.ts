import { FilterQuery } from 'mongodb';

import { Page } from '@covid19/types';

export interface IRepository<T extends { _id?: any }> {
  find(query: FilterQuery<T>, page?: Page): Promise<T[]>;
  findOne(query: FilterQuery<T>): Promise<T>;
  upsert(doc: T, query: FilterQuery<T>): Promise<T>;
  insertMany(docs: T[]): Promise<number>;
  deleteMany(query: FilterQuery<T>): Promise<number>;
}
