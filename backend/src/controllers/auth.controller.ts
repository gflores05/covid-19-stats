import { Request, Response } from 'express';
import { Inject, Service } from 'typedi';

import { IAuthService } from '@covid19/domain';

@Service('auth.controller')
export class AuthController {
  constructor(@Inject('auth.service') private service: IAuthService) {}

  async signup(req: Request, res: Response) {
    const auth = await this.service.register(req.body);

    if (auth.status === 'ok') {
      res.status(200).send(auth);
    } else {
      res.status(400).send(auth);
    }
  }

  async login(req: Request, res: Response) {
    const auth = await this.service.login(req.body);

    if (auth.status === 'ok') {
      res.status(200).send(auth);
    } else {
      res.status(400).send(auth);
    }
  }

  async refreshToken(req: Request, res: Response) {
    const auth = await this.service.refreshToken(req.body);

    if (auth.status === 'ok') {
      res.status(200).send(auth);
    } else {
      res.status(400).send(auth);
    }
  }
}
