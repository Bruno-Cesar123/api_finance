import CreateFinanceService from './CreateFinanceService';
import FakeFinancesRepository from '../repositories/fakes/FakeFinancesRepository';

let fakeFinancesRepository: FakeFinancesRepository;
let createFinance: CreateFinanceService;

describe('CreateFinance', () => {
  beforeEach(() => {
    fakeFinancesRepository = new FakeFinancesRepository();
    createFinance = new CreateFinanceService(fakeFinancesRepository);
  });

  it('should be able to create a new finance', async () => {
    const finance = await createFinance.execute({
      type: 'spend',
      description: 'water bill',
      user_id: '123123',
      value: 32.9,
      date: new Date(),
    });

    expect(finance).toHaveProperty('id');
    expect(finance.user_id).toBe('123123');
  });
});
