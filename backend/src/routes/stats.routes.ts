import { Application } from 'express';
import { Service, Inject } from 'typedi';

import { RoutesConfig } from '@covid19/core';
import { StatsController } from '@covid19/controllers';
import { AuthMiddleware } from '@covid19/middlewares';

@Service('stats.routes')
export class StatsRoutes extends RoutesConfig<StatsController> {
  constructor(
    @Inject('app') app: Application,
    controller: StatsController,
    @Inject('auth.middleware') private authMiddleware: AuthMiddleware
  ) {
    super(app, 'statistics', controller);
  }

  configureRoutes(): Application {
    const BASE_PATH = `/${this.name}`;

    this.app
      .route(`${BASE_PATH}`)
      .all((req, res, next) => this.authMiddleware.verify(req, res, next))
      .get((req, res) => this.controller.list(req, res))
      .post((req, res) => this.controller.create(req, res));

    this.app
      .route(`${BASE_PATH}/:id`)
      .all((req, res, next) => this.authMiddleware.verify(req, res, next))
      .get((req, res) => this.controller.findByCountry(req, res))
      .put((req, res) => this.controller.update(req, res));

    this.app
      .route('/sync')
      .all((req, res, next) => this.authMiddleware.verify(req, res, next))
      .post((req, res) => this.controller.syncData(req, res));

    return this.app;
  }
}
