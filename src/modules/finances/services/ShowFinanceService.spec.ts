import AppError from '@shared/errors/AppError';
import FakeFinancesRepository from '../repositories/fakes/FakeFinancesRepository';
import ShowFinanceService from './ShowFinanceService';

let fakeFinancesRepository: FakeFinancesRepository;
let showFinance: ShowFinanceService;

describe('ShowFinance', () => {
  beforeEach(() => {
    fakeFinancesRepository = new FakeFinancesRepository();
    showFinance = new ShowFinanceService(fakeFinancesRepository);
  });

  it('should be able to show the finance', async () => {
    const finance = await fakeFinancesRepository.create({
      type: 'spend',
      description: 'water bill',
      user_id: '123123',
      value: 32.9,
      date: new Date(),
    });

    const financeInfo = await showFinance.execute({
      id: finance.id,
    });

    expect(financeInfo.type).toBe('spend');
    expect(financeInfo.value).toBe(32.9);
  });

  it('should not be able the info from non-existing finance', async () => {
    await expect(
      showFinance.execute({
        id: 'non-existing-finance-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
