import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';
import Finance from '../infra/typeorm/entities/Finance';

import IFinancesRepository from '../repositories/IFinancesRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ListIntervalEntranceService {
  constructor(
    @inject('FinancesRepository')
    private financesRepository: IFinancesRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Finance[]> {
    const listIntervalEntrance =
      await this.financesRepository.listIntervalEntrance(user_id);

    return listIntervalEntrance;
  }
}

export default ListIntervalEntranceService;
