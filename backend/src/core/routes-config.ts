import { Application } from 'express';

import { IRoutesConfig } from '@covid19/domain';

export abstract class RoutesConfig<T> implements IRoutesConfig {
  readonly app: Application;
  readonly name: string;
  protected controller: T;

  constructor(app: Application, name: string, controller: T) {
    this.app = app;
    this.name = name;
    this.controller = controller;
    this.configureRoutes();
  }

  abstract configureRoutes(): Application;
}
