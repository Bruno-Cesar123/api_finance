import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IFinancesRepository from '../repositories/IFinancesRepository';

import Finance from '../infra/typeorm/entities/Finance';

interface IRequest {
  user_id: string;
}

@injectable()
class ListFinancesService {
  constructor(
    @inject('FinancesRepository')
    private financesRepository: IFinancesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Finance[] | null> {
    let finances = await this.cacheProvider.recover<Finance[]>(
      `finances-list:${user_id}`,
    );

    if (!finances) {
      finances = await this.financesRepository.findFinances(user_id);

      await this.cacheProvider.save(`finances-list:${user_id}`, finances);
    }

    return finances;
  }
}

export default ListFinancesService;
