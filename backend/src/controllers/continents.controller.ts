import { Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import { omit } from 'lodash';

import { IContinentService } from '@covid19/domain';

@Service()
export class ContinentsController {
  constructor(
    @Inject('continents.service') private service: IContinentService
  ) {}

  async list(req: Request, res: Response) {
    const { page, size } = req.query;

    const _page =
      page && size
        ? {
            page: parseInt(page?.toString() || '1', 10),
            size: parseInt(size?.toString() || '10', 10)
          }
        : null;

    const continents = await this.service.list(
      omit(req.query, ['page', 'size']),
      _page
    );
    res.status(200).send({ total: continents.length, results: continents });
  }
}
