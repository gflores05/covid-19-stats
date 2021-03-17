import { Application } from 'express';

export interface IRoutesConfig {
  configureRoutes(): Application;
}
