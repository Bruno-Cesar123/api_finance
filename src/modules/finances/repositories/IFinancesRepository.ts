import Finance from '../infra/typeorm/entities/Finance';

import ICreateFinanceDTO from '../dtos/ICreateFinanceDTO';

export default interface IFinancesRepository {
  create(data: ICreateFinanceDTO): Promise<Finance>;
  findFinances(user_id: string): Promise<Finance[]>;
  findFinanceId(id: string): Promise<Finance | undefined>;
  deleteFinance(finance: Finance): Promise<void>;
  sumTotalEntrance(user_id: string): Promise<number>;
  sumTotalSpend(user_id: string): Promise<number>;
}
