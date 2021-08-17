import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import IFinancesRepository from '../repositories/IFinancesRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowTotalEntranceFinanceService {
  constructor(
    @inject('FinancesRepository')
    private financesRepository: IFinancesRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<number> {
    const TotalEntrancefinance = await this.financesRepository.sumTotalEntrance(
      user_id,
    );

    return TotalEntrancefinance;
  }
}

export default ShowTotalEntranceFinanceService;
