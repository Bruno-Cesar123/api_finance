import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IFinancesRepository from '../repositories/IFinancesRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteFinanceService {
  constructor(
    @inject('FinancesRepository')
    private financesRepository: IFinancesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const finance = await this.financesRepository.findFinanceId(id);

    if (!finance) {
      throw new AppError('Finance does not exists', 401);
    }

    await this.financesRepository.deleteFinance(finance);

    await this.cacheProvider.invalidatePrefix('finances-list');
  }
}

export default DeleteFinanceService;
