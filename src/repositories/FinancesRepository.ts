import { EntityRepository, Repository } from 'typeorm';
import Finance from '../models/Finance';

@EntityRepository(Finance)
class FinancesRepository extends Repository<Finance> {}

export default FinancesRepository;
