import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import IFinancesRepository from '../repositories/IFinancesRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowTotalSpendFinanceService {
  constructor(
    @inject('FinancesRepository')
    private financesRepository: IFinancesRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<number> {
    const TotalSpendfinance = await this.financesRepository.sumTotalSpend(
      user_id,
    );

    return TotalSpendfinance;
  }
}

export default ShowTotalSpendFinanceService;
