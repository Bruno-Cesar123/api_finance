import 'reflect-metadata';
import AppError from '@shared/errors/AppError';

import { injectable, inject } from 'tsyringe';
import Finance from '../infra/typeorm/entities/Finance';

import IFinancesRepository from '../repositories/IFinancesRepository';

interface IRequest {
  id: string;
}

@injectable()
class ShowFinanceService {
  constructor(
    @inject('FinancesRepository')
    private financesRepository: IFinancesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Finance> {
    const finance = await this.financesRepository.findFinanceId(id);

    if (!finance) {
      throw new AppError('Finance does not exists', 401);
    }

    return finance;
  }
}

export default ShowFinanceService;
