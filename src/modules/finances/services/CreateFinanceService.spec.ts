import CreateFinanceService from './CreateFinanceService';
import FakeFinancesRepository from '../repositories/fakes/FakeFinancesRepository';

describe('CreateFinance', () => {
  it('should be able to create a new finance', async () => {
    const fakeFinancesRepository = new FakeFinancesRepository();
    const createFinance = new CreateFinanceService(fakeFinancesRepository);

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
