import { v4 as uuid } from 'uuid';

import IFinancesRepository from '@modules/finances/repositories/IFinancesRepository';
import ICreateFinanceDTO from '@modules/finances/dtos/ICreateFinanceDTO';

import Finance from '../../infra/typeorm/entities/Finance';

class FakeFinancesRepository implements IFinancesRepository {
  private finances: Finance[] = [];

  public async findFinanceId(id: string): Promise<Finance | undefined> {
    const FindFinance = this.finances.find(finance => finance.id === id);
    return FindFinance;
  }

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

  public async deleteFinance(finance: Finance): Promise<void> {
    const financeId = this.finances.indexOf(finance);
    this.finances.splice(financeId);
  }

  public async sumTotalEntrance(user_id: string): Promise<number> {
    // const finances = this.finances
    //   .filter(finance => finance.user_id === user_id)
    //   .map(fin => fin.type)
    //   .reduce((total, preco) => total + preco);

    const finances = this.finances.filter(
      finance => finance.user_id === user_id,
    );

    const total = finances.some(finance => finance.type);

    return Number(total);
  }

  public async sumTotalSpend(user_id: string): Promise<number> {
    // const finances = this.finances
    //   .filter(finance => finance.user_id === user_id)
    //   .map(fin => fin.type)
    //   .reduce((total, preco) => total + preco);

    const finances = this.finances.filter(
      finance => finance.user_id === user_id,
    );

    const total = finances.some(finance => finance.type);

    return Number(total);
  }
}

export default FakeFinancesRepository;
