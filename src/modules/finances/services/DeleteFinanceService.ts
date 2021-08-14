import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IFinancesRepository from '../repositories/IFinancesRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteFinanceService {
  constructor(
    @inject('FinancesRepository')
    private financesRepository: IFinancesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const finance = await this.financesRepository.findFinanceId(id);

    if (!finance) {
      throw new AppError('Finance does not exists', 401);
    }

    await this.financesRepository.deleteFinance(finance);
  }
}

export default DeleteFinanceService;
