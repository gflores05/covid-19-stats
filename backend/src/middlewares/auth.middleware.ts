import { Inject, Service } from 'typedi';
import { NextFunction, Request, Response } from 'express';

import { IAuthService } from '@covid19/domain';

@Service('auth.middleware')
export class AuthMiddleware {
  constructor(@Inject('auth.service') private service: IAuthService) {}

  async verify(req: Request, res: Response, next: NextFunction) {
    const verify = await this.service.verify({
      accessToken: req.headers['authorization'],
      status: null
    });

    if (verify.status === 'ok') {
      next();
    } else {
      res.status(401).send(verify);
    }
  }
}
