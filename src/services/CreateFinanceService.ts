import Finance from '../models/Finance';
import FinancesRepository from '../repositories/FinancesRepository';

interface Request {
  type: string;
  description: string;
  value: string;
  date: Date;
}

class CreateFinanceService {
  private financesRepository: FinancesRepository;

  constructor(financesRepository: FinancesRepository) {
    this.financesRepository = financesRepository;
  }

  public execute({ type, description, value, date }: Request): Finance {
    const finance = this.financesRepository.create({
      type,
      description,
      value,
      date,
    });

    return finance;
  }
}

export default CreateFinanceService;
