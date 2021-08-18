import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import Finance from '../infra/typeorm/entities/Finance';

import IFinancesRepository from '../repositories/IFinancesRepository';

interface IRequest {
  type: string;
  description: string;
  user_id: string;
  value: number;
  date: Date;
}

@injectable()
class CreateFinanceService {
  constructor(
    @inject('FinancesRepository')
    private financesRepository: IFinancesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    type,
    description,
    user_id,
    value,
    date,
  }: IRequest): Promise<Finance> {
    const finance = await this.financesRepository.create({
      type,
      description,
      user_id,
      value,
      date,
    });

    await this.cacheProvider.invalidatePrefix('finances-list');

    return finance;
  }
}

export default CreateFinanceService;
