import { Application } from 'express';

import { RoutesConfig } from '@covid19/core';
import { StatsController } from '@covid19/controllers';

export class StatsRoutes extends RoutesConfig<StatsController> {
  constructor(app: Application, controller: StatsController) {
    super(app, 'statistics', controller);
  }

  configureRoutes(): Application {
    const BASE_PATH = '/statistics';

    this.app
      .route(`${BASE_PATH}`)
      .get((req, res) => this.controller.list(req, res))
      .post((req, res) => this.controller.create(req, res));

    this.app
      .route(`${BASE_PATH}/:id`)
      .get((req, res) => this.controller.findById(req, res))
      .put((req, res) => this.controller.update(req, res));

    return this.app;
  }
}
