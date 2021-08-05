import { container } from 'tsyringe';

import IFinancesRepository from '@modules/finances/repositories/IFinancesRepository';
import FinancesRepository from '@modules/finances/infra/typeorm/repositories/FinancesRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IFinancesRepository>(
  'FinancesRepository',
  FinancesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
