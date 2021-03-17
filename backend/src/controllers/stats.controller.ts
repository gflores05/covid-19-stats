import { Request, Response } from 'express';
import { Inject, Service } from 'typedi';

import { IStatsService } from '@covid19/domain';

@Service()
export class StatsController {
  constructor(@Inject('stats.service') private service: IStatsService) {}

  async create(req: Request, res: Response) {
    const id = await this.service.create(req.body);
    return res.status(200).send({ id });
  }
  async update(req: Request, res: Response) {
    await this.service.update(req.body);
    return res.status(200).send();
  }
  async findById(req: Request, res: Response) {
    const stats = await this.service.findById(req.params.id);
    res.status(200).send(stats);
  }
  async findByCountry(req: Request, res: Response) {
    const stats = await this.service.findById(req.params.country);
    res.status(200).send(stats);
  }
  async list(req: Request, res: Response) {
    const { start, end, size } = req.params;
    const stats = await this.service.list({
      start: parseInt(start, 10),
      end: parseInt(end, 10),
      size: parseInt(size, 10)
    });
    res.status(200).send({ total: stats.length, results: stats });
  }
}
