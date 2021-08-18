import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import CreateFinanceService from './CreateFinanceService';
import FakeFinancesRepository from '../repositories/fakes/FakeFinancesRepository';

let fakeFinancesRepository: FakeFinancesRepository;
let fakeCacheProvider: FakeCacheProvider;
let createFinance: CreateFinanceService;

describe('CreateFinance', () => {
  beforeEach(() => {
    fakeFinancesRepository = new FakeFinancesRepository();
    fakeCacheProvider = new FakeCacheProvider();
    createFinance = new CreateFinanceService(
      fakeFinancesRepository,
      fakeCacheProvider,
    );
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
