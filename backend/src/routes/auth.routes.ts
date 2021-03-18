import { Application } from 'express';
import { Service, Inject } from 'typedi';

import { RoutesConfig } from '@covid19/core';
import { AuthController } from '@covid19/controllers';

@Service('auth.routes')
export class AuthRoutes extends RoutesConfig<AuthController> {
  constructor(
    @Inject('app') app: Application,
    @Inject('auth.controller') controller: AuthController
  ) {
    super(app, 'auth', controller);
  }

  configureRoutes(): Application {
    const BASE_PATH = `/${this.name}`;

    this.app
      .route(`${BASE_PATH}/signup`)
      .post((req, res) => this.controller.signup(req, res));

    this.app
      .route(`${BASE_PATH}/login`)
      .post((req, res) => this.controller.login(req, res));

    this.app
      .route(`${BASE_PATH}/refreshToken`)
      .post((req, res) => this.controller.refreshToken(req, res));

    return this.app;
  }
}
