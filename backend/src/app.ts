import 'reflect-metadata';
import { Container } from 'typedi';
import * as express from 'express';
import { json } from 'body-parser';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import * as cors from 'cors';

require('dotenv').config({ debug: process.env.DEBUG });

import { IRoutesConfig } from '@covid19/domain';

const app: express.Application = express();

Container.set<express.Application>('app', app);
Container.set('database.uri', process.env.DB_URI);
Container.set('database.name', process.env.DB_NAME);
Container.set('datasource.url', process.env.SOURCE_URL);
Container.set('datasource.apikey', process.env.SOURCE_API_KEY);

import '@covid19/repository';
import '@covid19/services';
import '@covid19/routes';

const routes: IRoutesConfig[] = [];

app.use(json());
app.use(cors());
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  })
);

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  })
);

routes.push(Container.get<IRoutesConfig>('stats.routes'));

export default app;
