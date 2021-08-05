import { getRepository, Repository } from 'typeorm';

import IFinancesRepository from '@modules/finances/repositories/IFinancesRepository';
import ICreateFinanceDTO from '@modules/finances/dtos/ICreateFinanceDTO';

import Finance from '../entities/Finance';

class FinancesRepository implements IFinancesRepository {
  private ormRepository: Repository<Finance>;

  constructor() {
    this.ormRepository = getRepository(Finance);
  }

  public async create({
    type,
    description,
    user_id,
    value,
    date,
  }: ICreateFinanceDTO): Promise<Finance> {
    const finance = this.ormRepository.create({
      type,
      description,
      user_id,
      value,
      date,
    });

    await this.ormRepository.save(finance);

    return finance;
  }
}

export default FinancesRepository;
