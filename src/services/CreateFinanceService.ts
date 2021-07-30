import { getCustomRepository } from 'typeorm';

import Finance from '../models/Finance';
import FinancesRepository from '../repositories/FinancesRepository';

interface Request {
  type: string;
  description: string;
  value: number;
  date: Date;
}

class CreateFinanceService {
  public async execute({
    type,
    description,
    value,
    date,
  }: Request): Promise<Finance> {
    const financesRepository = getCustomRepository(FinancesRepository);

    const finance = financesRepository.create({
      type,
      description,
      value,
      date,
    });

    await financesRepository.save(finance);

    return finance;
  }
}

export default CreateFinanceService;
