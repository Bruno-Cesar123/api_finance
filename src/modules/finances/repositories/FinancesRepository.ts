import { EntityRepository, Repository } from 'typeorm';
import Finance from '../infra/typeorm/entities/Finance';

@EntityRepository(Finance)
class FinancesRepository extends Repository<Finance> {}

export default FinancesRepository;
