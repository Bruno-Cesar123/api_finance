import { v4 as uuid } from 'uuid';

import IFinancesRepository from '@modules/finances/repositories/IFinancesRepository';
import ICreateFinanceDTO from '@modules/finances/dtos/ICreateFinanceDTO';

import Finance from '../../infra/typeorm/entities/Finance';

class FakeFinancesRepository implements IFinancesRepository {
  private finances: Finance[] = [];

  public async findFinances(user_id: string): Promise<Finance[]> {
    const finances = this.finances.filter(
      finance => finance.user_id === user_id,
    );
    return finances;
  }

  public async create({
    type,
    description,
    user_id,
    value,
    date,
  }: ICreateFinanceDTO): Promise<Finance> {
    const finance = new Finance();

    Object.assign(finance, {
      id: uuid(),
      type,
      description,
      user_id,
      value,
      date,
    });

    this.finances.push(finance);

    return finance;
  }
}

export default FakeFinancesRepository;
