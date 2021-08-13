import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import IFinancesRepository from '../repositories/IFinancesRepository';

import Finance from '../infra/typeorm/entities/Finance';

interface IRequest {
  user_id: string;
}

@injectable()
class ListFinancesService {
  constructor(
    @inject('FinancesRepository')
    private financesRepository: IFinancesRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Finance[] | undefined> {
    const finances = await this.financesRepository.findFinances(user_id);

    return finances;
  }
}

export default ListFinancesService;
