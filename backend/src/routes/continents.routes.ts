import { Application } from 'express';
import { Service, Inject } from 'typedi';

import { RoutesConfig } from '@covid19/core';
import { ContinentsController } from '@covid19/controllers';

@Service('continents.routes')
export class ContinentsRoutes extends RoutesConfig<ContinentsController> {
  constructor(
    @Inject('app') app: Application,
    controller: ContinentsController
  ) {
    super(app, 'continents', controller);
  }

  configureRoutes(): Application {
    const BASE_PATH = `/${this.name}`;

    this.app
      .route(`${BASE_PATH}`)
      .get((req, res) => this.controller.list(req, res));

    return this.app;
  }
}
