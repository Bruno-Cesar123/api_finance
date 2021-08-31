import { getRepository, Repository } from 'typeorm';

import IFinancesRepository from '@modules/finances/repositories/IFinancesRepository';
import ICreateFinanceDTO from '@modules/finances/dtos/ICreateFinanceDTO';

import Finance from '../entities/Finance';

class FinancesRepository implements IFinancesRepository {
  private ormRepository: Repository<Finance>;

  constructor() {
    this.ormRepository = getRepository(Finance);
  }

  public async findFinanceId(id: string): Promise<Finance | undefined> {
    const finance = await this.ormRepository.findOne(id);

    return finance;
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

  public async findFinances(user_id: string): Promise<Finance[]> {
    const finances = await this.ormRepository.find({
      where: { user_id },
    });

    return finances;
  }

  public async deleteFinance(finance: Finance): Promise<void> {
    await this.ormRepository.remove(finance);
  }

  public async sumTotalEntrance(user_id: string): Promise<number> {
    const sumTotal = await this.ormRepository.query(`
      SELECT SUM(finances.value) AS total FROM finances WHERE finances.type = 'entrada' AND finances.user_id = '${user_id}' ;
    `);

    return sumTotal[0].total;
  }

  public async sumTotalSpend(user_id: string): Promise<number> {
    const sumTotal = await this.ormRepository.query(`
      SELECT SUM(finances.value) AS total FROM finances WHERE finances.type = 'gasto' AND finances.user_id = '${user_id}' ;
    `);

    return sumTotal[0].total;
  }

  public async listIntervalEntrance(user_id: string): Promise<Finance[]> {
    const listIntervalEntrance = await this.ormRepository.query(`
      SELECT SUM(finances.value) as total, DATE_TRUNC('day', created_at) AS date_interval
      FROM finances WHERE finances.type = 'entrada'
      AND finances.user_id = '${user_id}'
      AND finances.created_at > current_date - interval '10' day
      GROUP BY date_interval
    `);

    return listIntervalEntrance;
  }

  public async listIntervalSpend(user_id: string): Promise<Finance[]> {
    const listIntervalEntrance = await this.ormRepository.query(`
      SELECT SUM(finances.value) as total, DATE_TRUNC('day', created_at) AS date_interval
      FROM finances WHERE finances.type = 'gasto'
      AND finances.user_id = '${user_id}'
      AND finances.created_at > current_date - interval '10' day
      GROUP BY date_interval
    `);

    return listIntervalEntrance;
  }
}

export default FinancesRepository;
