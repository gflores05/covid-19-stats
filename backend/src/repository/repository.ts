import { MongoClient, FilterQuery, OptionalId } from 'mongodb';
import { omit } from 'lodash';

import { IRepository } from '@covid19/domain/repository';
import { Page } from '@covid19/types';

export abstract class Repository<T> implements IRepository<T> {
  constructor(
    private databseUri: string,
    protected databaseName: string,
    protected collectionName: string
  ) {}

  protected getClient() {
    const client = new MongoClient(this.databseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    return client;
  }

  protected getCollection(client: MongoClient) {
    const database = client.db(this.databaseName);
    const collection = database.collection<T>(this.collectionName);

    return collection;
  }

  async find(query: FilterQuery<T>, page?: Page): Promise<T[]> {
    const client = this.getClient();
    await client.connect();

    const collection = this.getCollection(client);

    try {
      let cursor = collection.find(query);

      if (page) {
        const skip = (page.page - 1) * page.size;
        cursor = cursor.skip(skip).limit(page.size);
      }

      return await cursor.toArray();
    } finally {
      client.close();
    }
  }

  async findOne(query: FilterQuery<T>): Promise<T> {
    const client = this.getClient();
    await client.connect();

    const collection = this.getCollection(client);

    return await collection.findOne(query);
  }

  async upsert(doc: T, query: FilterQuery<T>): Promise<T> {
    const client = this.getClient();
    await client.connect();

    const collection = this.getCollection(client);

    try {
      let current = await collection.findOne(query);

      if (current) {
        await collection.updateOne(query, {
          $set: {
            ...current,
            ...doc
          }
        });
      } else {
        const result = await collection.findOneAndReplace(
          query,
          omit(doc, ['_id']),
          {
            upsert: true
          }
        );

        current = result.value;
      }
      return current;
    } finally {
      client.close();
    }
  }

  async insertMany(docs: T[]): Promise<number> {
    const client = this.getClient();
    await client.connect();

    const collection = this.getCollection(client);

    try {
      const result = await collection.insertMany(
        docs.map((doc) => doc as OptionalId<T>)
      );

      return result.insertedCount;
    } finally {
      client.close();
    }
  }

  async deleteMany(query: FilterQuery<T>): Promise<number> {
    const client = this.getClient();
    await client.connect();

    const collection = this.getCollection(client);

    try {
      const result = await collection.deleteMany(query);

      return result.deletedCount;
    } finally {
      client.close();
    }
  }
}
