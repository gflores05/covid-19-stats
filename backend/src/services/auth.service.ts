import { Service, Inject } from 'typedi';
import * as argon2 from 'argon2';
import * as scstring from '@supercharge/strings';
import * as jwt from 'jsonwebtoken';

import { IAuthService } from '@covid19/domain';
import { User } from '@covid19/models';
import { Auth, Login } from '@covid19/types';
import { IRepository } from '@covid19/domain/repository';

@Service('auth.service')
export class AuthService implements IAuthService {
  constructor(
    @Inject('users.repository') private repository: IRepository<User>,
    @Inject('auth.secret') private secret: string,
    @Inject('auth.expiration') private expiration: number
  ) {}

  generateToken(user: User): Auth {
    const accessToken = jwt.sign({ username: user.username }, this.secret, {
      expiresIn: this.expiration
    });

    return {
      username: user.username,
      accessToken,
      refreshToken: user.refreshToken,
      status: 'ok'
    };
  }

  async register(user: User): Promise<Auth> {
    const existUser = await this.getByUsername(user.username);

    if (existUser) {
      return {
        status: 'User exists'
      };
    }

    const password = await argon2.hash(user.password);
    const refreshToken = scstring.random(21);

    this.repository.upsert(
      {
        _id: null,
        username: user.username,
        password,
        refreshToken
      },
      { username: user.username }
    );

    return this.generateToken({ ...user, refreshToken });
  }

  async login(login: Login): Promise<Auth> {
    const user = await this.getByUsername(login.username);

    if (!user) {
      return {
        status: 'Invalid User'
      };
    }

    const validatePassword = await argon2.verify(user.password, login.password);

    if (!validatePassword) {
      return {
        status: 'Invalid Password'
      };
    }

    const refreshToken = scstring.random(21);

    this.repository.upsert(
      { ...user, refreshToken },
      { username: user.username }
    );

    return this.generateToken({ ...user, refreshToken });
  }

  async refreshToken(auth: Auth): Promise<Auth> {
    const user = await this.getByUsername(auth.username);

    if (user.refreshToken !== auth.refreshToken) {
      return {
        status: 'Invalid refresh token'
      };
    }

    return this.generateToken(user);
  }

  async verify(auth: Auth): Promise<Auth> {
    try {
      const decoded = jwt.verify(auth.accessToken, this.secret);

      return {
        username: (decoded as any).username,
        status: 'ok'
      };
    } catch (error) {
      return {
        status: 'Invalid'
      };
    }
  }

  async getByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });

    return user;
  }
}
