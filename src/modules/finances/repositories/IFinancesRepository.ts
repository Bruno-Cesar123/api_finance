import Finance from '../infra/typeorm/entities/Finance';

import ICreateFinanceDTO from '../dtos/ICreateFinanceDTO';

export default interface IFinancesRepository {
  create(data: ICreateFinanceDTO): Promise<Finance>;
  findFinances(user_id: string): Promise<Finance[]>;
}
