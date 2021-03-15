import * as express from 'express';
import { json } from 'body-parser';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import * as cors from 'cors';

import { IRoutesConfig } from '@covid19/core';
import { StatsController } from '@covid19/controllers';
import { StatsService } from '@covid19/services';
import { StatsRoutes } from '@covid19/routes';

const app: express.Application = express();

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

routes.push(new StatsRoutes(app, new StatsController(StatsService.instance)));

export default app;
