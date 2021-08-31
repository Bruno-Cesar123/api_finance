import ListIntervalSpendService from './ListIntervalSpendService';
import FakeFinancesRepository from '../repositories/fakes/FakeFinancesRepository';

let fakeFinancesRepository: FakeFinancesRepository;
let listIntervalSpend: ListIntervalSpendService;

describe('ListIntervalSpend', () => {
  beforeEach(() => {
    fakeFinancesRepository = new FakeFinancesRepository();
    listIntervalSpend = new ListIntervalSpendService(fakeFinancesRepository);
  });

  it('should be able to list finances', async () => {
    const finance = await fakeFinancesRepository.create({
      type: 'spend',
      description: 'water bill',
      user_id: '123123',
      value: 32.9,
      date: new Date(),
    });

    const listEntrances = await listIntervalSpend.execute({
      user_id: finance.user_id,
    });

    expect(listEntrances).toStrictEqual([finance]);
  });
});
