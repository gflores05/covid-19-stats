import { Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import { omit } from 'lodash';

import { IStatsService } from '@covid19/domain';

@Service()
export class StatsController {
  constructor(@Inject('stats.service') private service: IStatsService) {}

  async create(req: Request, res: Response) {
    const id = await this.service.create(req.body);
    res.status(200).send({ id });
  }

  async update(req: Request, res: Response) {
    const result = await this.service.update(req.params.id, req.body);
    return res.status(200).send(result);
  }

  async findById(req: Request, res: Response) {
    const stats = await this.service.findById(req.params.id);
    res.status(200).send(stats);
  }

  async findByCountry(req: Request, res: Response) {
    const stats = await this.service.findByCountry(req.params.id);
    res.status(200).send(stats);
  }

  async list(req: Request, res: Response) {
    const { page, size } = req.query;

    const _page =
      page && size
        ? {
            page: parseInt(page?.toString() || '1', 10),
            size: parseInt(size?.toString() || '10', 10)
          }
        : null;

    const stats = await this.service.list(
      omit(req.query, ['page', 'size']),
      _page
    );
    res.status(200).send({ total: stats.length, results: stats });
  }

  async syncData(req: Request, res: Response) {
    const inserteds = await this.service.syncData();

    res.status(200).send({ inserteds });
  }
}
