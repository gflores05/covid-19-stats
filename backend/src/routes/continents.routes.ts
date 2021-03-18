import { Application } from 'express';
import { Service, Inject } from 'typedi';

import { RoutesConfig } from '@covid19/core';
import { ContinentsController } from '@covid19/controllers';
import { AuthMiddleware } from '@covid19/middlewares';

@Service('continents.routes')
export class ContinentsRoutes extends RoutesConfig<ContinentsController> {
  constructor(
    @Inject('app') app: Application,
    controller: ContinentsController,
    @Inject('auth.middleware') private authMiddleware: AuthMiddleware
  ) {
    super(app, 'continents', controller);
  }

  configureRoutes(): Application {
    const BASE_PATH = `/${this.name}`;

    this.app
      .route(`${BASE_PATH}`)
      .all((req, res, next) => this.authMiddleware.verify(req, res, next))
      .get((req, res) => this.controller.list(req, res));

    return this.app;
  }
}
