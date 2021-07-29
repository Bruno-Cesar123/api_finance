import Finance from '../models/Finance';

interface CreateFinanceDTO {
  type: string;
  description: string;
  value: string;
  date: Date;
}

class FinancesRepository {
  private finances: Finance[];

  constructor() {
    this.finances = [];
  }

  public all(): Finance[] {
    return this.finances;
  }

  public create({ type, description, value, date }: CreateFinanceDTO): Finance {
    const finance = new Finance({ type, description, value, date });

    this.finances.push(finance);

    return finance;
  }
}

export default FinancesRepository;
