import ShowTotalEntranceFinanceService from './ShowTotalEntranceFinanceService';
import FakeFinancesRepository from '../repositories/fakes/FakeFinancesRepository';

let fakeFinancesRepository: FakeFinancesRepository;
let showTotalEntranceFinance: ShowTotalEntranceFinanceService;

describe('showTotalEntranceFinance', () => {
  beforeEach(() => {
    fakeFinancesRepository = new FakeFinancesRepository();
    showTotalEntranceFinance = new ShowTotalEntranceFinanceService(
      fakeFinancesRepository,
    );
  });

  it('should be able to create a new finance', async () => {
    const finance = await fakeFinancesRepository.create({
      type: 'spend',
      description: 'water bill',
      user_id: '123123',
      value: 100,
      date: new Date(),
    });

    const countFinanceType = await showTotalEntranceFinance.execute({
      user_id: finance.user_id,
    });

    expect(countFinanceType).toBe(1);
  });
});
