import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import Finance from '../infra/typeorm/entities/Finance';

import IFinancesRepository from '../repositories/IFinancesRepository';

interface IRequest {
  type: string;
  description: string;
  user_id: string;
  value: number;
  date: Date;
}

@injectable()
class CreateFinanceService {
  constructor(
    @inject('FinancesRepository')
    private financesRepository: IFinancesRepository,
  ) {}

  public async execute({
    type,
    description,
    user_id,
    value,
    date,
  }: IRequest): Promise<Finance> {
    const finance = await this.financesRepository.create({
      type,
      description,
      user_id,
      value,
      date,
    });

    return finance;
  }
}

export default CreateFinanceService;
