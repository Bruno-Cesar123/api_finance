import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IFinancesRepository from '@modules/finances/repositories/IFinancesRepository';
import FinancesRepository from '@modules/finances/infra/typeorm/repositories/FinancesRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IFinancesRepository>(
  'FinancesRepository',
  FinancesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
